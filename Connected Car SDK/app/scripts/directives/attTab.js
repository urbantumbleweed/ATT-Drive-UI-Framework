'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.tab.directive:attTab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name connectedCarSDK.tab.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link connectedCarSDK.tab.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
angular.module('connectedCarSDK.attTab', ['connectedCarSDK.attTabset'])
  .directive('attTab', ['$parse', function ($parse) {
      return {
          require: '^attTabset',
          restrict: 'EA',
          replace: true,
          templateUrl: '/templates/tabs/attTab.html',
          transclude: true,
          scope: {
              active: '=?',
              heading: '@',
              onSelect: '&select', //This callback is called in contentHeadingTransclude
              //once it inserts the tab's content into the dom
              onDeselect: '&deselect'
          },
          controller: function () {
              //Empty controller so other directives can require being 'under' a tab
          },
          compile: function (elm, attrs, transclude) {
              return function postLink(scope, elm, attrs, tabsetCtrl) {
                  scope.$watch('active', function (active) {
                      if (active) {
                          tabsetCtrl.select(scope);
                      }
                  });

                  scope.disabled = false;
                  if (attrs.disabled) {
                      scope.$parent.$watch($parse(attrs.disabled), function (value) {
                          scope.disabled = !!value;
                      });
                  }

                  scope.select = function () {
                      if (!scope.disabled) {
                          scope.active = true;
                      }
                  };

                  tabsetCtrl.addTab(scope);
                  scope.$on('$destroy', function () {
                      tabsetCtrl.removeTab(scope);
                  });

                  //We need to transclude later, once the content container is ready.
                  //when this link happens, we're inside a tab heading.
                  scope.$transcludeFn = transclude;
              };
          }
      };
  }])

.directive('tabHeadingTransclude', [function () {
    return {
        restrict: 'A',
        require: '^attTab',
        link: function (scope, elm, attrs, tabCtrl) {
            scope.$watch('headingElement', function updateHeadingElement(heading) {
                if (heading) {
                    elm.html('');
                    elm.append(heading);
                }
            });
        }
    };
}])

.directive('tabContentTransclude', function () {
    return {
        restrict: 'A',
        require: '^attTabset',
        link: function (scope, elm, attrs) {
            var tab = scope.$eval(attrs.tabContentTransclude);

            //Now our tab is ready to be transcluded: both the tab heading area
            //and the tab content area are loaded.  Transclude 'em both.
            tab.$transcludeFn(tab.$parent, function (contents) {
                angular.forEach(contents, function (node) {
                    if (isTabHeading(node)) {
                        //Let tabHeadingTransclude know.
                        tab.headingElement = node;
                    } else {
                        elm.append(node);
                    }
                });
            });
        }
    };
    function isTabHeading(node) {
        return node.tagName && (
          node.hasAttribute('tab-heading') ||
          node.hasAttribute('data-tab-heading') ||
          node.tagName.toLowerCase() === 'tab-heading' ||
          node.tagName.toLowerCase() === 'data-tab-heading'
        );
    }
})

;
