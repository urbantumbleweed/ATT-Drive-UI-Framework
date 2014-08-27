'use strict';

/**
 * @ngdoc function
 * @name connectedCarSdk.controller:TabsCtrl
 * @description
 * # ToogleSwitchCtrl
 * Controller of the connectedCarSdk
 */

angular.module('connectedCarSdk')
  .controller('TabsCtrl', function ($scope) {
      $scope.tabs = [
        { title: 'Dynamic Title 1', content: 'Dynamic content 1 abc' },
        { title: 'Dynamic Title 2', content: 'Dynamic content 2 abc' }];
  });


