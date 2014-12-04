'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:attSlider
 * @description
 * # attSlider
 */
angular.module('connectedCarSDK.attSlider', [])
    .directive('attSlider', ['$interval', function($interval) {
        return {
            restrict: 'EA',
            templateUrl: 'templates/attSlider.html',
            scope: {
                type: '@',
                ngModel: '=',
                min: '@',
                max: '@',
                textLeft: '@',
                textRight: '@',
                parentControl: '@'
            },
            link: function (scope, element, attrs) {

                // set default values
                scope.min = scope.min || 0;
                scope.max = scope.max || 100;
                scope.ngModel = scope.ngModel || 0;
                
                var input = element.find('input');
                if (input && input.length > 0) {

                    // calculate gradient stop position
                    var value = (scope.ngModel - scope.min) / (scope.max - scope.min);
                    input[0].style.backgroundImage = [
                        '-webkit-gradient(',
                        'linear, ',
                        'left top, ',
                        'right top, ',
                        'color-stop(' + value + ', ' + getComputedStyle(input[0]).backgroundColor + '), ',
                        'color-stop(' + value + ', #ffffff)',
                        ')'
                    ].join('');
                    
                }

                scope.sliderMovingInterval;
                scope.sliderMovingTime = 200;
                scope.sliderMoved = false;

                scope.sliderMoved = function () {
                    scope.$emit("sliderMoved", scope.parentControl);
                };               

                scope.sliderMoving = function () {
                    scope.$emit("sliderMoving", scope.parentControl);
                };

                // watch for model changes and repaint the slider
                // using new calculated gradient stops
                scope.$watch(function () {
                    return scope.ngModel;
                }, function () {

                    if (input && input.length > 0) {
                        // calculate gradient stop position
                        var gradStop = (scope.ngModel - scope.min) / (scope.max - scope.min);
                        input[0].style.backgroundImage = [
                            '-webkit-gradient(',
                            'linear, ',
                            'left top, ',
                            'right top, ',
                            'color-stop(' + gradStop + ', ' + getComputedStyle(input[0]).backgroundColor + '), ',
                            'color-stop(' + gradStop + ', #ffffff)',
                            ')'
                        ].join('');
                    }
                });
            }
        };
    }]);
