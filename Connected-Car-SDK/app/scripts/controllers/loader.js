'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:LoaderCtrl
 * @description
 * # LoaderCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('LoaderCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.testLoader = function () {
          $http.get('http://www.google.com')
            .success(function (response, status) {
            });
      };
  }]);


