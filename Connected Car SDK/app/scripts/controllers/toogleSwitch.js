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
      $scope.customModel = true;

      $scope.test = function () {
          alert($scope.customModel);
      };
  });


