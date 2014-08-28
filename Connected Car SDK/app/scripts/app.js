'use strict';

/**
 * @ngdoc overview
 * @name connectedCarSdk
 * @description
 * # connectedCarSdk
 *
 * Main module of the application.
 */
angular
  .module('connectedCarSdk', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
        .otherwise({
            redirectTo: '/'
        });
  });
