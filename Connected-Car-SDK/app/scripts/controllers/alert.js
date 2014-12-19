'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:BadgeCtrl
 * @description
 * # AlertCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('AlertCtrl', function ($scope, $alert) {

    $scope.someClosingMethod = function() {
        console.log('someClosingMethod() called');
    };

    $scope.onClick = function() {
        window.alert('Alert button click');
    };

    $scope.showAlert = function() {

        $alert.show({
            type: $scope.type,
            showIcon: $scope.showIcon,
            showConfirmationBtn: $scope.showConfirmationBtn,
            buttonText: $scope.buttonText,
            onClose: $scope.someClosingMethod,
            onClick: $scope.onClick,
            autoCloseInterval: $scope.autoCloseInterval,
            title: $scope.title,
            text: $scope.text
        });

    };

});

