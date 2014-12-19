'use strict';


angular.module('dropdownContainerApp', [
  'connectedCarSDK.attDropdown'
])
  .controller('DropdownCtrl', function ($scope) {
    $scope.items = [
      { text: 'Item1', value: 1 },
      { text: 'Item2', value: 2 },
      { text: 'Item3', value: 3 },
      { text: 'Item4', value: 4 }];

    $scope.selectedItem = null;//$scope.items[0];
  });

