var app = angular.module('exampleApp1');

app.controller('MainCtrl', ['$rootScope', '$scope', '$location',
    function ($rootScope, $scope, $location) {

        $scope.today = new Date();
        $scope.toggleModel = false;
        $scope.color = 'red';
    }]);