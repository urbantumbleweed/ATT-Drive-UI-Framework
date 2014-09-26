'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:ToggleSwitchCtrl
 * @description
 * # ToggleSwitchCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('ToggleSwitchCtrl', function ($scope) {
      $scope.customModel = true;
      $scope.customModel2 = true;

      $scope.onChange = function () {
          console.log($scope.customModel);
      };

      $scope.onChange2 = function () {
          console.log($scope.customModel2);
      };
  });


