﻿var app = angular.module('app', [
    'ngRoute',
    'connectedCarSDK'
]);

app.config(function($routeProvider) {
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

app.run(function($rootScope) {

    $rootScope.showDrawer = false;
    
    $rootScope.appLinks = [
        { text: 'Forecast', desc: 'Watch daily forecast', href: '#/' },
        { text: 'About', desc: 'Monitor hourly forecast', href: '#/about' },
        { text: 'Settings', desc: 'Change app settings', href: '#/settings' },
    ];

    $rootScope.$on('$routeChangeSuccess',
        function(event, next, current) {
            $rootScope.showDrawer = false;
        });
});
