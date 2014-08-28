'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:attAlert
 * @description
 * # attAlert
 */
angular.module('connectedCarSdkApp')
  .directive('attAlert', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the attAlert directive');
      }
    };
  });
