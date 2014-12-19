'use strict';

angular.module('app')
    .controller('FirstPageCtrl', ['$scope','decFactory', function($scope, decFactory) {

        $scope.init = function() {

            // Important to get watcher working
            $scope.decFactory = decFactory;

            $scope.vehicleInfo = decFactory.getVehicleInfo();
            $scope.notification = decFactory.getNotification();

            $scope.welcomepage = decFactory.welcomepage;

            decFactory.testSingleton+=1;
            console.log("Test Singeton:" + decFactory.testSingleton);
        }

        $scope.mammascan = function(){
            console.log("Simulating requests");
            decFactory.pullStorage();
            $scope.$apply(function () {
                $scope.message = "Timeout called!";
            });

        }

        $scope.toggleWelcome = function(){
            decFactory.toggleWelcome();
            $scope.welcomepage = decFactory.welcomepage;

        }

        $scope.clearNotification = function(){
            decFactory.clearNotification();
        }

        $scope.simulate = function(){
            console.log("Simulating info updates");
            decFactory.simulate();
        }


        $scope.init();

    }]);
