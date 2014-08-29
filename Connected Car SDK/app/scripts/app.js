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
    'connectedCarSDK.toggleSwitch',
    'connectedCarSDK.tab',
    'connectedCarSDK.progressbar',
    'connectedCarSDK.carousel',
    'connectedCarSDK.attAlert'
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
        .when('/alert', {
            templateUrl: 'views/alert.html',
            controller: 'AlertCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
