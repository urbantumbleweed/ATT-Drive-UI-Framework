'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.attDynamicContent.directive:attDynamicContent
 * @description
 * # attDynamicContent
 */
angular.module('connectedCarSDK.attDynamicContent', [])
  .directive('attDynamicContent', ['$http', '$location', function ($http, $location) {
      return {
          restrict: 'E',
          templateUrl: '/appTemplates/attDynamicContent.html',
          replace: true,
          scope: {
              markdown: "=",
              linenums: "=",
              selector: "="
          },
          link: function (scope, element, attrs) {

              scope.data = null;

              if (angular.isDefined(attrs.url)) {

                  var url = $location.protocol() + "://" + $location.host() + ":" + $location.port() + attrs.url; // create URL

                  $http.get(url).success(function (data) {
                      scope.data = data;

                      if (scope.selector)
                      {
                            var a = element.find(scope.selector);
                      }

                      if (scope.markdown) // convert markdown to HTML
                      {
                             var converter = new Showdown.converter();
                             scope.data = converter.makeHtml(scope.data);
                      }
                  });
              }

          }
      };
  }]);