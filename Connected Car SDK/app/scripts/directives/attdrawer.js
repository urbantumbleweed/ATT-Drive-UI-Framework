'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:attdrawer
 * @description
 * # attdrawer
 */
angular.module('connectedCarSDK.attDrawer', [])
    .directive('attDrawer', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/attDrawer.html',
            transclude: true,
            link: function (scope, element, attrs) {
                
            }
        };
    });
