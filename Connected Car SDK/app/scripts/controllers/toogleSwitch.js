'use strict';

/**
 * @ngdoc function
 * @name connectedCarSdk.controller:ToogleSwitchCtrl
 * @description
 * # ToogleSwitchCtrl
 * Controller of the connectedCarSdk
 */

angular.module('connectedCarSdk')
  .controller('ToogleSwitchCtrl', function ($scope) {
      $scope.customModel = 'ON';

      $scope.test = function () {
          alert($scope.customModel);
      };
  });


