'use strict';

angular.module('connectedCarSDK.attContent', [])
  .directive('attContent', ['$rootScope', function($rootScope){
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: 'templates/attContent.html',
    link: function(scope, element, attrs){
      attrs.$observe('hasHeader', function(value){
        if(value === 'true'){
          element.addClass('has-header');
        }
        else{
          element.removeClass('has-header');

        }
      });
      attrs.$observe('hasFooter', function(value){
        if(value === 'true'){
          element.addClass('has-footer');
        }
        else{
          element.removeClass('has-footer');
        }
      });

      attrs.$observe('backgroundImg', function(value){
        element.css('background', 'url(' + value +') no-repeat center center fixed');
        element.css('-webkit-background-size', 'cover');
        element.css('-moz-background-size', 'cover');
        element.css('-o-background-size', 'cover');
        element.css('background-size', 'cover');
      });
    }

  };
}]);
