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
        { text: 'First view', desc: 'Description of the view', href: '#/', selected: true },
        { text: 'Second view', desc: 'Description of the view', href: '#/' },
        { text: 'Third view', desc: 'Description of the view', href: '#/' }
    ];
    
    $scope.showDrawer = false;

    $scope.toggleDrawer = function() {
        $scope.showDrawer = !$scope.showDrawer;
        $rootScope.$broadcast('changeDrawer', [$scope.showDrawer]);
    };

});


