var app = angular.module('app', [
    'ngRoute',
    'connectedCarSDK'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/forecast.html',
            controller: 'ForecastCtrl',
            settings: {
                viewName: 'FORECAST'
            }
        })
        .when('/settings', {
            templateUrl: 'app/views/settings.html',
            controller: 'SettingsCtrl',
            settings: {
                viewName: 'SETTINGS'
            }
        })
        .when('/about', {
            templateUrl: 'app/views/about.html',
            controller: 'AboutCtrl',
            settings: {
                viewName: 'ABOUT'
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.run(function($rootScope) {

    $rootScope.appName = 'ACCUWEATHER';
    $rootScope.showDrawer = false;

    $rootScope.$on('$routeChangeSuccess',
        function (event, next, current) {
            $rootScope.showDrawer = false;

            if (next && next.$$route && next.$$route.settings) {
                $rootScope.viewName = next.$$route.settings.viewName;
            }
        });

    $rootScope.appLinks = [
        { text: 'Forecast', desc: 'Watch daily forecast', href: '#/', selected: true },
        { text: 'About', desc: 'Monitor hourly forecast', href: '#/about', selected: false },
        { text: 'Settings', desc: 'Change app settings', href: '#/settings', selected: false },
    ];
    
});
