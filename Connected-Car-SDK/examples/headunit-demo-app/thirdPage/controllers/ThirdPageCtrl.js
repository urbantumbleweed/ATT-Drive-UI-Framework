'use strict';

angular.module('app')
    .controller('ThirdPageCtrl', ['$scope', 'decFactory', function($scope,decFactory) {

      $scope.position = {};

      $scope.init = function() {
        // Important to bind scopes
        $scope.decFactory = decFactory;

        $scope.position = decFactory.getPosition();
        $scope.notification = decFactory.getNotification();

        decFactory.testSingleton+=5;
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