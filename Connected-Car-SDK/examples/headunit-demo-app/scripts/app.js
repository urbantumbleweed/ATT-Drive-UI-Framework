"use strict";

var app = angular.module('app', [
    'ngRoute',
    'connectedCarSDK',
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/firstPage', {
            templateUrl: 'firstPage/views/firstPage.html',
            controller: 'FirstPageCtrl',
            settings: {
                viewName: ''
            }
        })
        .when('/secondPage', {
            templateUrl: 'secondPage/views/secondPage.html',
            controller: 'SecondPageCtrl',
            settings: {
                viewName: 'Climate'
            }
        })
        .when('/thirdPage', {
            templateUrl: 'thirdPage/views/thirdPage.html',
            controller: 'ThirdPageCtrl',
            settings: {
                viewName: 'Navigation'
            }
        })
        .when('/fourthPage', {
            templateUrl: 'fourthPage/views/fourthPage.html',
            controller: 'FourthPageCtrl',
            settings: {
                viewName: 'Settings'
            }
        })
        .otherwise({
            redirectTo: '/firstPage'
        });
});

app.run(function ($rootScope) {

    $rootScope.appName = 'myFirstApp';
    $rootScope.showDrawer = true;

    $rootScope.$on('$routeChangeSuccess',
        function (event, next, current) {
            $rootScope.showDrawer = false;

            $rootScope.$broadcast('changeDrawer', [false]);

            if (next && next.$$route && next.$$route.settings) {
                $rootScope.viewName = next.$$route.settings.viewName;
            }
        });

    $rootScope.appLinks = [
        { text: 'Dashboard', desc: 'The dashboard', href: '#/firstPage', selected: true },
        { text: 'Climate', desc: 'The climate control', href: '#/secondPage', selected: false },
        { text: 'Navigation', desc: 'The navigation', href: '#/thirdPage', selected: false },
        { text: 'Setting', desc: 'The settings', href: '#/fourthPage', selected: false }
    ];
});