'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:DrawerCtrl
 * @description
 * # ToggleSwitchCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('DrawerCtrl', function($rootScope, $scope) {

        $rootScope.showDrawer = false;

        $scope.toggleDrawer = function() {
            $rootScope.showDrawer = !$rootScope.showDrawer;
        };

    });


