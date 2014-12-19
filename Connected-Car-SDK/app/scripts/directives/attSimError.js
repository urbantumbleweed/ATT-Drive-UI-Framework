'use strict';

angular.module('connectedCarSDK.attSimError', [])
  .directive('attSimError', [function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/attSimError.html',
      link: function(scope, iElm, iAttrs, controller) {
          console.log('Params: ', scope, iElm, iAttrs, controller);
      }
    };
  }]);
