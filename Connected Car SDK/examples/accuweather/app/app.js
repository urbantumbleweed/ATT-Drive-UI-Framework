angular.module('app', [
        'ngRoute',
        'connectedCarSDK'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/forecast.html',
                controller: 'ForecastCtrl'
            })
            .when('/settings', {
                templateUrl: 'app/views/settings.html',
                controller: 'SettingsCtrl'
            })
            .when('/about', {
                templateUrl: 'app/views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
