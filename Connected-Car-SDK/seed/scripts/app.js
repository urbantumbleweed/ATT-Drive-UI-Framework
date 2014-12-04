"use strict";

var app = angular.module('app', [
    'ngRoute',
    'connectedCarSDK'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/firstPage', {
            templateUrl: 'firstPage/views/firstPage.html',
            controller: 'FirstPageCtrl',
            settings: {
                viewName: 'First Page',
            }
        })
        .when('/secondPage', {
            templateUrl: 'secondPage/views/secondPage.html',
            controller: 'SecondPageCtrl',
            settings: {
                viewName: 'Second Page',
            }
        })
        .otherwise({
            redirectTo: '/firstPage'
        });
});

// AT&T DRIVE DEC INIT
function decCallback() {
};

app.run(function ($rootScope) {

    // DO NOT REMOVE THE BELLOW COMMENT - used for grunt build process
    init(new decCallback(), [decNamespacesPlaceholder], 'appNameStr');

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
        { text: 'First Page', desc: 'First page description', href: '#/firstPage', selected: true },
        { text: 'Second Page', desc: 'Second page description', href: '#/secondPage', selected: false }
    ];
});
