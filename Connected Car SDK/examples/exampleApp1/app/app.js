angular.module('exampleApp1', [
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    'connectedCarSDK'
    
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
