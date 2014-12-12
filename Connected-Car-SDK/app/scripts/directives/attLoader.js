'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.loader.directive:attLoader
 * @description
 * # attLoader
 */
angular.module('connectedCarSDK.attLoader', [])
    .factory('$loader', ['$rootScope', '$compile', '$document', function ($rootScope, $compile, $document) {

        var getLoaderReference = function () {

            var loaderDomEl;

            // try to find any existing loader in document body
            var allDivElements = $document.find('body').find('div');

            if (allDivElements) {

                angular.forEach(allDivElements, function (divEl) {
                    if (angular.element(divEl).hasClass('att-loader')) {
                        loaderDomEl = divEl;
                    }
                });

            }
            
            // if there are no existing loaders, create one and add to document body
            if (!loaderDomEl) {

                var angularDomEl = angular.element('<att-loader></att-loader>');

                // TODO: add support for 'show after'
                //angularDomEl.attr({

                //});

                var alertScope = $rootScope.$new(false);
                loaderDomEl = $compile(angularDomEl)(alertScope);
                $document.find('body').eq(0).append(loaderDomEl);

            }

            return loaderDomEl;
        };

        return {

            show: function () {

                var loader = getLoaderReference();

                // show the loader
                if (loader) {
                    var scope = angular.element(loader).scope();
                    scope.forceshow = true;
                }
            },

            hide: function() {

                var loader = getLoaderReference();

                // show the loader
                if (loader) {
                    var scope = angular.element(loader).scope();
                    scope.forceshow = false;
                }
            }

        };
    }])
  .directive('attLoader', ['$http', function ($http) {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'templates/attLoader.html',
          link: function (scope, element, attrs) {

              scope.isLoading = function () {
                  return ($http.pendingRequests.length > 0) || scope.forceshow;
              };

              scope.$watch(scope.isLoading, function (v) {
                  if (v) {
                      element.css("display", "flex");
                  } else {
                      element.css("display", "none");
                  }
              });

          }
      };
  }]);
