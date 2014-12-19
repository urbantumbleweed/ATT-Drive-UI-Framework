'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('HeaderCtrl', ['$scope', function ($scope) {

        $scope.appName = 'APPNAME';
        $scope.viewName = 'CURRENT VIEW';

        //$header.showBackButton(true, function () { alert("preda");});

        $scope.headerCallback = function () {
            window.alert('Header Callback');
        };

    }]);


