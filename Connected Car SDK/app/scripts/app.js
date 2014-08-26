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
      .when('/toogle-switch', {
          templateUrl: 'views/toogleSwitch.html',
          controller: 'ToogleSwitchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
