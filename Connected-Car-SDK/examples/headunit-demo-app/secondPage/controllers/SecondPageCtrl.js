'use strict';

angular.module('app')
    .controller('SecondPageCtrl', ['$scope', 'decFactory', function($scope,decFactory) {

      $scope.vehicleInfo = {};
      $scope.formData = {};
      $scope.formDataUpdated = {};

      $scope.init = function() {
        // Important to bind scopes
        $scope.decFactory = decFactory;

        $scope.vehicleInfo = decFactory.getVehicleInfo();
        $scope.notification = decFactory.getNotification();
        decFactory.testSingleton+=3;
        console.log("Test Singeton:" + decFactory.testSingleton);
      }

      $scope.simulate = function(){
        console.log("Simulating requests");
        decFactory.simulate();
      }

      $scope.clearNotification = function(){
        decFactory.clearNotification();
      }

      $scope.init();

    }]);