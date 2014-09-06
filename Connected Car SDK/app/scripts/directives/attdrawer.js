'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:attdrawer
 * @description
 * # attdrawer
 */
angular.module('connectedCarSDK.attDrawer', [])
    .directive('attDrawer', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: '/templates/attDrawer.html',
            transclude: true,
            link: function (scope, element, attrs) {

                scope.closeDrawer = function() {
                    $rootScope.showDrawer = false;
                };

            }
        };
    });
