'use strict';

angular.module('connectedCarSDK')
  .controller('FooterCtrl', ['$scope', function($scope){
      var reset = function(){
        $scope.items = [
          {
            'value': 'Item'
          }
        ];
        $scope.alignment = 'center';
      };

      reset();

      $scope.addItem = function(){
        $scope.items.push({'value': 'Item'});
      };

      $scope.reset = reset;

  }]);
