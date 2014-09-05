'use strict';

/**
 * @ngdoc overview
 * @name connectedCarSDK
 * @description
 * # connectedCarSDK
 *
 * Main module of the application.
 */
var app = angular
  .module('connectedCarSDK', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'connectedCarSDK.attToggleSwitch',
    'connectedCarSDK.attTab',
    'connectedCarSDK.attProgressBar',
    'connectedCarSDK.attCarousel',
    'connectedCarSDK.attAlert',
    'connectedCarSDK.attButtons',
    'connectedCarSDK.attDropdown',
    'connectedCarSDK.attLoader',
    'connectedCarSDK.attBadge',
    'connectedCarSDK.attListView',
    'connectedCarSDK.attModal',
    'connectedCarSDK.attMenu',
    'connectedCarSDK.attDrawer',
    'connectedCarSDK.attHeader',
    'connectedCarSDK.attDynamicContent'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/toggle-switch', {
            templateUrl: 'views/toggleSwitch/toggleSwitch.html',
            controller: 'ToggleSwitchCtrl'
        })
        .when('/tabs', {
            templateUrl: 'views/tabs/tabs.html',
            controller: 'TabsCtrl'
        })
        .when('/progress-bar', {
            templateUrl: 'views/progressBar/progressBar.html',
            controller: 'ProgressBarCtrl'
        })
        .when('/carousel', {
            templateUrl: 'views/carousel/carousel.html',
            controller: 'CarouselCtrl'
        })
        .when('/buttons', {
            templateUrl: 'views/buttons/buttons.html',
            controller: 'ButtonsCtrl'
        })
	    .when('/alert', {
            templateUrl: 'views/alert/alert.html',
            controller: 'AlertCtrl'
	    })
        .when('/dropdown', {
            templateUrl: 'views/dropdown/dropdown.html',
            controller: 'DropdownCtrl'
        })
        .when('/loader', {
            templateUrl: 'views/loader/loader.html',
            controller: 'LoaderCtrl'
        })
        .when('/badge', {
            templateUrl: 'views/badge/badge.html',
            controller: 'BadgeCtrl'
        })
        .when('/modal', {
            templateUrl: 'views/modal/modal.html',
            controller: 'ModalCtrl'
        })
        .when('/radio', {
            templateUrl: 'views/radio/radio.html',
            controller: 'RadioBtnCtrl'
        })
        .when('/listview', {
            templateUrl: 'views/listView/listView.html',
            controller: 'ListViewCtrl'
        })
        .when('/drawer', {
            templateUrl: 'views/drawer/drawer.html',
            controller: 'DrawerCtrl'
        })
        .when('/menu', {
             templateUrl: 'views/menu/menu.html',
             controller: 'MenuCtrl'
        })
        .when('/header', {
            templateUrl: 'views/header/header.html',
            controller: 'HeaderCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });


app.run(function ($rootScope, $timeout) {
    
    $rootScope.$on('$routeChangeSuccess',
        function (event, next, current) {
            $timeout(function() {
                prettyPrint();
            }, 500);
            
        });
});
