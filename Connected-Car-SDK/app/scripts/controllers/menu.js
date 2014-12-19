'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('MenuCtrl', ['$scope',function ($scope) {
      $scope.items = [
          { text: 'Tabs', desc: 'Tabs directive', href: '#/tabs', selected: true },
          { text: 'Buttons', desc: 'Buttons directive', href: '#/buttons', selected: false },
          { text: 'Alert', desc: 'Alert directive', href: '#/alert', selected: false },
          { text: 'Badge', desc: 'Badge directive', href: '#/badge', selected: false }
      ];
  }]);


