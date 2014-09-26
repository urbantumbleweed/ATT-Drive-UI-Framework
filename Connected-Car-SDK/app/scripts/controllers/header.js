'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('HeaderCtrl', ['$scope', '$header', '$timeout', function ($scope, $header, $timeout) {

        $scope.appName = 'APPNAME';
        $scope.viewName = 'CURRENT VIEW';

        //$header.showBackButton(true, function () { alert("preda");});

        $scope.headerCallback = function () {
            alert("Header Callback");
        };

    }]);


