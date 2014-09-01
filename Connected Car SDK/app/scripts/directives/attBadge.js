'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.badge.directive:attbadge
 * @description
 * # attBadge
 */
angular.module('connectedCarSDK.badge', [])
  .directive('attBadge', function () {
      return {
          templateUrl: '/templates/badge.html',
          restrict: 'E',
          replace: true,
          link: function (scope, element, attrs) {
          }
      };
  });
