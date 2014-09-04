'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.tabset.directive:attTabset
 * @description
 * # attTabset
 */
angular.module('connectedCarSDK.attTabset', [])
  .controller('TabsetController', ['$scope', function ($scope) {
      var ctrl = this,
          tabs = ctrl.tabs = $scope.tabs = [];

      ctrl.select = function (selectedTab) {
          angular.forEach(tabs, function (tab) {
              if (tab.active && tab !== selectedTab) {
                  tab.active = false;
                  tab.onDeselect();
              }
          });
          selectedTab.active = true;
          selectedTab.onSelect();
      };

      ctrl.addTab = function addTab(tab) {
          tabs.push(tab);
          // we can't run the select function on the first tab
          // since that would select it twice
          if (tabs.length === 1) {
              tab.active = true;
          } else if (tab.active) {
              ctrl.select(tab);
          }
      };

      ctrl.removeTab = function removeTab(tab) {
          var index = tabs.indexOf(tab);
          //Select a new tab if the tab to be removed is selected
          if (tab.active && tabs.length > 1) {
              //If this is the last tab, select the previous tab. else, the next tab.
              var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
              ctrl.select(tabs[newActiveIndex]);
          }
          tabs.splice(index, 1);
      };
  }])

/**
 * @ngdoc directive
 * @name connectedCarSDK.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Tab 1"><b>First</b> Content!</tab>
      <tab heading="Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
    <tabset justified="true">
      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('attTabset', function () {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {
            type: '@'
        },
        controller: 'TabsetController',
        templateUrl: '/templates/tabs/attTabset.html',
        link: function (scope, element, attrs) {
            scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
            scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
            scope.topPosition = angular.isDefined(attrs.topPosition) ? scope.$parent.$eval(attrs.topPosition) : false;
        }
    };
})
