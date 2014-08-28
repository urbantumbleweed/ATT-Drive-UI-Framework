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
    'connectedCarSDK.carousel'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/toogle-switch', {
            templateUrl: 'views/toogleSwitch.html',
            controller: 'ToogleSwitchCtrl'
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
        .otherwise({
            redirectTo: '/'
        });
  });
