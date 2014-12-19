'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:PinPadCtrl
 * @description
 * # PinPadCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('PinPadCtrl', function ($scope) {

    $scope.confirm = function() {
        if ($scope.pin === '751645') {
            window.alert('Correct PIN');
        } else {
            window.alert('Incorrect PIN');
        }
    };

});