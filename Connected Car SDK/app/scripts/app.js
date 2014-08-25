'use strict';

/**
 * @ngdoc overview
 * @name connectedCarSdkApp
 * @description
 * # connectedCarSdkApp
 *
 * Main module of the application.
 */
angular
  .module('connectedCarSdkApp', [
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
      .when('/toogleSwitch', {
          templateUrl: 'views/toogleSwitch.html',
          controller: 'ToogleSwitchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
