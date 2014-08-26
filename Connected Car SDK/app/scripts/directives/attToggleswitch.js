'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:toggleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSdkApp')
  .directive('attToggleSwitch', function () {
    return {
      templateUrl: '/templates/toggleSwitch.html',
      restrict: 'A',
        scope: {
            CustomModel: 'ON'
        }
    };
  });
