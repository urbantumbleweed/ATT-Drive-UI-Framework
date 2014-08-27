'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdkApp.directive:attTabs
 * @description
 * # attTabs
 */
angular.module('connectedCarSdk')
  .directive('attTabs', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the attTabs directive');
      }
    };
  });
