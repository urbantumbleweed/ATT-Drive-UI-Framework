'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.attMenu.directive:attMenu
 * @description
 * # attMenu
 */
angular.module('connectedCarSDK.attMenu', [])
  .directive('attMenu', function () {
      return {
          templateUrl: '/templates/attMenu.html',
          restrict: 'E',
          replace: true,
          scope: {
              items: '=',         // list of objects to bind {text, desc, selected}
              title: '='          // string
          },
          link: function (scope, element, attrs) {

              scope.onItemClick = function (item) {
                  if (scope.items) {
                      scope.items.forEach(function (i) {
                          if (i == item)
                              i.selected = true;
                          else i.selected = false;
                      });
                  }
              };

          }
      };
  });
