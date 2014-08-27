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
        .when('/tabs', {
            templateUrl: 'views/tabs.html'

        })
        .when('/toogle-switch', {
            templateUrl: 'views/toogleSwitch.html',
            controller: 'ToogleSwitchCtrl'
        })
        .when('/toogle-switch', {
            templateUrl: 'views/tabs.html',
            controller: 'TabsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
