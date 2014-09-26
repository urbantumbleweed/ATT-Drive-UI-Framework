'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:PinPadProviderCtrl
 * @description
 * # PinPadProviderCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('PinPadProviderCtrl', function($scope, $pinPad) {

        $scope.purchase = function() {
            $pinPad.show({
                numDigits: 4,
                onConfirm: $scope.validatePin
            });
        };

        $scope.validatePin = function (pin) {
            if (pin == "6189") {
                alert("Correct PIN");
            } else {
                alert("Incorrect PIN");
            }

            // close the pin pad
            $pinPad.close();
        };

    });