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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/toggle-switch', {
          templateUrl: 'views/toggleSwitch.html',
          controller: 'ToogleSwitchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
