'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.directive:toggleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSdk')
  .directive('attToggleSwitch', function () {
    return {
      templateUrl: '/templates/toggleSwitch.html',
      restrict: 'A',
        scope: {
            CustomModel: 'ON'
        }
    };
  });
