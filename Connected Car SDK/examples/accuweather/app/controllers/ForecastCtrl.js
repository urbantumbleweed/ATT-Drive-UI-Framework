var app = angular.module('app');

app.controller('ForecastCtrl', ['$rootScope', '$scope',
    function ($rootScope, $scope) {

        $scope.currentDate = new Date();

        $scope.weatherStats = {
            minTemp: 'MIN 65°',
            maxTemp: 'MAX 75°',
            currentTemp: 70,

            precipitation: '10',
            chanceOfRain: 60,
            humidity: '67',
            wind: '0'
        };
        
    }]);