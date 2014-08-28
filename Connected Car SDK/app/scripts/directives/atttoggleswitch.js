'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.toggleSwitch.directive:attToggleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSDK.toggleSwitch', [])
  .directive('attToggleSwitch', function () {
      return {
          templateUrl: '/templates/toggleSwitch.html',
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
