var sdk = angular.module('connectedCarSDK');

sdk.controller('AlertCtrl', function($scope) {

    $scope.customModel = true;

    $scope.runCustomCode = function() {

        alert('On Close event called');

    };

    $scope.alerts = [];
    $scope.alerts.push({
        type: 'info',
        showIcon: 'true',
        showClose: 'true',
        autoClose: undefined,
        title: 'Alert title',
        content: 'Sample alert content'
    });

    $scope.showAlert = function() {

        $scope.alerts.push({
            type: $scope.type,
            showIcon: $scope.showIcon,
            showClose: $scope.showClose,
            autoClose: $scope.autoClose,
            title: $scope.title,
            content: $scope.content
        });

    };


    $scope.removeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

});


