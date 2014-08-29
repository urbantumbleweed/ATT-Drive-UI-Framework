'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('ButtonsCtrl', function ($scope) {
      $scope.singleModel = 1;

      $scope.radioModel = 'Middle';

      $scope.checkModel = {
          left: false,
          middle: true,
          right: false
      };
  });


