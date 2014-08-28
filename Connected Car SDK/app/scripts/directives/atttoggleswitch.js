'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.toggleSwitch.directive:attToogleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSDK.toggleSwitch', [])
  .directive('attToogleSwitch', function () {
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
