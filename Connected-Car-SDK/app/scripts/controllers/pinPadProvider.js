'use strict';



angular.module('pinpadContainerApp', [
  'connectedCarSDK.attPinPad'
])
    .controller('PinPadProviderCtrl', function($scope, $pinPad) {

        $scope.purchase = function() {
            $pinPad.show({
                numDigits: 6,
                onConfirm: $scope.validatePin,
                templateUrl: '/templates/attPinPad.html'
            });
        };

        $scope.validatePin = function (pin) {
            if (pin === '751645') {
                window.alert('Correct PIN');
            } else {
                window.alert('Incorrect PIN');
            }

            // close the pin pad
            $pinPad.close();
        };

    });
