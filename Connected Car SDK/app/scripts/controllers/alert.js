angular.module('connectedCarSDK')
  .controller('AlertCtrl', function ($scope) {

      $scope.customModel = true;

    $scope.runCustomCode = function() {

        alert('On Close event called');

    };

});


