'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:RadioBtnCtrl
 * @description
 * # RadioBtnCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK').controller('SliderCtrl', function($scope) {

    $scope.sliderConfig = {
        min: 1,
        max: 100
    };

    $scope.defaultSlider = {
        val: 20,
        textLeft: 'Some text',
        textRight: 'Some more text'
    };

    $scope.successSlider = {
        val: 30,
        textLeft: 'Success text',
        textRight: 'It\'s all cool'
    };

    $scope.warningSlider = {
        val: 40,
        textLeft: 'Warning text',
        textRight: 'Be carefull'
    };

    $scope.dangerSlider = {
        val: 50,
        textLeft: 'Danger text',
        textRight: 'Run away'
    };
    
});


