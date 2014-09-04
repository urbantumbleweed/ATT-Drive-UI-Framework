var app = angular.module('app');

app.controller('ForecastCtrl', ['$rootScope', '$scope',
    function ($rootScope, $scope) {

        $scope.min = 'MIN 65°';
        $scope.max = 'MAX 75°';
        $scope.currentTemp = 70;
        $scope.precipitation = '10';
        $scope.humidity = '67';
        $scope.wind = '0';

    }]);