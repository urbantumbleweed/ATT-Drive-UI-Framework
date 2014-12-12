'use strict';

angular.module('connectedCarSDK.attFooter', [])
  .directive('attFooter',  function(){
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'templates/attFooter.html',
      link: function(scope, element, attrs){

        attrs.$observe('verticalAlignment', function(value){
          if(value){
            scope.alignment = value;
          }
          else{
            scope.alignment = 'center';
          }
        });

        attrs.$observe('isFixed', function(value){

          value = typeof value !== 'undefined' ? value : 'true';
          if(value === 'true'){
            scope.isFixed = 'footer-fixed';
          }
          else{
            scope.isFixed = null;
          }
        });

      }
    };
  });
