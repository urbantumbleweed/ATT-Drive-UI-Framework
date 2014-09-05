'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:DrawerCtrl
 * @description
 * # ToggleSwitchCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK').controller('DrawerCtrl', function($rootScope, $scope) {
    
    $scope.appName = 'APPNAME';
    $scope.viewName = 'CURRENT VIEW';

    $scope.title = 'Menu';
    $scope.appLinks = [
        { text: 'First view', desc: 'Description of the view', href: '#/' },
        { text: 'Second view', desc: 'Description of the view', href: '#/' },
        { text: 'Third view', desc: 'Description of the view', href: '#/' },
    ];
    
    $rootScope.showDrawer = false;

    $scope.toggleDrawer = function() {
        $rootScope.showDrawer = !$rootScope.showDrawer;
    };

});


