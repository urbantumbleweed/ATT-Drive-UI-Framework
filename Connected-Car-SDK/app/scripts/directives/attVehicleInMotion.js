'use strict';

angular.module('connectedCarSDK.attVehicleInMotion', [])
  .directive('attVehicleInMotion', [function(){
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/attVehicleInMotion.html',
      link: function (scope, iElm, iAttrs, controller) {

          console.log('Properties: ', scope, iElm, iAttrs, controller);
      }
    };
  }]);
