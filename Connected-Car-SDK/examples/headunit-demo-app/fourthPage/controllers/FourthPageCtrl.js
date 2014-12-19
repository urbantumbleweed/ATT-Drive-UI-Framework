'use strict';

angular.module('app')
    .controller('FourthPageCtrl', ['$scope', 'decFactory', function($scope,decFactory) {

        $scope.init = function() {
            // Important to bind scopes
            $scope.decFactory = decFactory;
            $scope.notification = decFactory.getNotification();

            decFactory.initListener();
            //$scope.count = 5;
            $scope.subscribedVehicleInfo = !(decFactory.handleVI == null);
            $scope.subscribedNavigation = !(decFactory.handleNav == null);
            $scope.subscribedNotification = !(decFactory.handleNotif == null);
        }

        $scope.simulate = function(){
            console.log("Simulating requests");
            decFactory.testSet();

        }

        $scope.getulate = function(){
            console.log("Pulling storage");
            decFactory.pullStorage();
        }

        $scope.clearNotification = function(){
            decFactory.clearNotification();
        }

        $scope.onChangeVI = function() {
            if ($scope.subscribedVehicleInfo) {
                decFactory.subscribeVI()
            }
            else {
                decFactory.unsubscribeVI();

            }
        }

        $scope.showStorageData = function() {
            decFactory.showStorageData();
        }

        $scope.showStorageSubscriptions = function() {
            decFactory.showStorageSubscriptions();
        }

        $scope.clearStorage = function() {
            decFactory.clearStorage();
        }

        $scope.onChangeNav = function() {
            if ($scope.subscribedNavigation) {
                decFactory.subscribeNav()
            }
            else {
                decFactory.unsubscribeNav();
            }
        }

        $scope.onChangeNotif = function() {
            if ($scope.subscribedNotification) {
                decFactory.subscribeNotif()
            }
            else {
                decFactory.unsubscribeNotif();
            }
        }


        $scope.init();

    }]);