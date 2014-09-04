'use strict';

/**
 * @ngdoc overview
 * @name connectedCarSDK
 * @description
 * # connectedCarSDK
 *
 * Main module of the application.
 */
angular
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
    'connectedCarSDK.attDrawer',
    'connectedCarSDK.attMenu'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/toggle-switch', {
            templateUrl: 'views/toggleSwitch.html',
            controller: 'ToggleSwitchCtrl'
        }) 
        .when('/tabs', {
            templateUrl: 'views/tabs.html',
            controller: 'TabsCtrl'
        })
        .when('/progress-bar', {
            templateUrl: 'views/progressBar.html',
            controller: 'ProgressBarCtrl'
        })
        .when('/carousel', {
            templateUrl: 'views/carousel.html',
            controller: 'CarouselCtrl'
        })
        .when('/buttons', {
            templateUrl: 'views/buttons.html',
            controller: 'ButtonsCtrl'
        })
	    .when('/alert', {
            templateUrl: 'views/alert.html',
            controller: 'AlertCtrl'
	    })
        .when('/dropdown', {
            templateUrl: 'views/dropdown.html',
            controller: 'DropdownCtrl'
        })
        .when('/loader', {
            templateUrl: 'views/loader.html',
            controller: 'LoaderCtrl'
        })
        .when('/badge', {
            templateUrl: 'views/badge.html',
            controller: 'BadgeCtrl'
        })
        .when('/modal', {
            templateUrl: 'views/modal.html',
            controller: 'ModalCtrl'
        })
        .when('/radio', {
            templateUrl: 'views/radio.html',
            controller: 'RadioBtnCtrl'
        })
        .when('/listview', {
            templateUrl: 'views/listView.html',
            controller: 'ListViewCtrl'
        })
        .when('/drawer', {
            templateUrl: 'views/drawer.html',
            controller: 'DrawerCtrl'
        })
        .when('/menu', {
             templateUrl: 'views/menu.html',
             controller: 'MenuCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
