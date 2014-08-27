'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.directive:toggleSwitch
 * @description
 * # toggleSwitch
 */
angular.module('connectedCarSdk')
  .directive('attToogleSwitch', function () {
      return {
          templateUrl: '/templates/toogleSwitch.html',
          restrict: 'A',
          scope: {
              attCustomModel: '='
          },
          link: function ($scope, $element, attrs) {
              $scope.checked = $scope.attCustomModel ? "on" : "off";

              $scope.change = function (enabled)
              {
                  $scope.attCustomModel = enabled;
                  $scope.checked = enabled ? "on" : "off";
              }
          }
      };
  });
