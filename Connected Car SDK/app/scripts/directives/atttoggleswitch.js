'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.toggleSwitch.directive:attToggleSwitch
 * @description
 * # attToggleSwitch
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

              if (angular.isDefined(attrs.disabled))
              {
                  element.find("label").attr("disabled", "disabled");
              }

              scope.change = function (enabled)
              {
                  scope.ngModel = enabled;
              }

          }
      };
  });
