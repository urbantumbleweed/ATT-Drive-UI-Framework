'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.attHeader.directive:attHeader
 * @description
 * # attHeader
 */
angular.module('connectedCarSDK.attHeader', [])
  .directive('attHeader', function () {
    return {
        restrict: 'E',
        templateUrl: '/templates/attHeader.html',
        replace: true,
        scope: {
            appName:  '=',
            currentItem: '=',
            appImage: '@'
        },
        link: function (scope, element, attrs) {
        }
    };
  });
