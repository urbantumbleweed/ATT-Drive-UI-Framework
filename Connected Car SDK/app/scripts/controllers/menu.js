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
          { text: "Tabs", desc: "Tabs directive", href: "#/tabs" },
          { text: "Buttons", desc: "Buttons directive", href: "#/buttons" },
          { text: "Alert", desc: "Alert directive", href: "#/alert" },
          { text: "Badge", desc: "Badge directive", href: "#/badge" }
      ];
  }]);


