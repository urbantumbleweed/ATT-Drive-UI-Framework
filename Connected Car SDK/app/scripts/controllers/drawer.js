'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:DrawerCtrl
 * @description
 * # ToggleSwitchCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK').controller('DrawerCtrl', function($rootScope, $scope) {
    
    $scope.appName = 'ACCUWEATHER';
    $scope.viewName = 'FORECAST';

    $scope.title = 'Menu';
    $scope.appLinks = [
        { text: 'Forecast', desc: 'Watch daily forecast', href: '#/forecast' },
        { text: 'Hourly', desc: 'Monitor hourly forecast', href: '#/hourly' },
        { text: 'Settings', desc: 'Change app settings', href: '#/settings' },
    ];
    
    $rootScope.showDrawer = false;

    $scope.toggleDrawer = function() {
        $rootScope.showDrawer = !$rootScope.showDrawer;
    };

});


