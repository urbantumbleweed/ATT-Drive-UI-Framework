'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.directive:toggleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSdk')
  .directive('toogleSwitch', function () {
      return {
          templateUrl: '/templates/toogleSwitch.html',
          restrict: 'E',
          scope: {
              ngModel: '='
          },
          require: '^ngModel',
          link: function (scope, element, attrs) {

              scope.change = function (enabled)
              {
                  scope.ngModel = enabled;
              }

          }
      };
  });
