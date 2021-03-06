'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.badge.directive:attbadge
 * @description
 * # attBadge
 */
angular.module('connectedCarSDK.attBadge', [])
  .directive('attBadge', function () {
      return {
          templateUrl: 'templates/attBadge.html',
          restrict: 'E',
          replace: true,
          scope: {
              value: '@',
              badgeType: '@'
          },
          link: function () {
              // Implement logic here..
          }
      };
  });
