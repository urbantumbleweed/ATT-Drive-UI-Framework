'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.loader.directive:attLoader
 * @description
 * # attLoader
 */
angular.module('connectedCarSDK.loader', [])
  .directive('attLoader', ['$http', function ($http) {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: '/templates/loader.html',
          link: function (scope, element, attrs) {

              scope.isLoading = function () {
                  return $http.pendingRequests.length > 0;
              };

              scope.$watch(scope.isLoading, function (v) {
                  if (v) {
                      element.css("display", "block");
                  } else {
                      element.css("display", "none");
                  }
              });

          }
      };
  }]);
