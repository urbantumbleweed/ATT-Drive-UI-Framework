'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:LoaderCtrl
 * @description
 * # LoaderCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('LoaderCtrl', [
        '$scope', '$http', '$loader', function($scope, $http, $loader) {

            $scope.showLoader = function() {
                $loader.show();
            };

            $scope.hideLoader = function() {
                $loader.hide();
            };

        }
    ]);


