﻿'use strict';

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
        if ($scope.pin == "7516") {
            alert("Correct PIN");
        } else {
            alert("Incorrect PIN");
        }
    };

});