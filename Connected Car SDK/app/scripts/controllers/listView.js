'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:RadioBtnCtrl
 * @description
 * # RadioBtnCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
    .controller('ListViewCtrl', function ($scope) {

        $scope.title = 'Music genres';
        $scope.genres = [
            {
                text: 'Rock',
                desc: 'rock music'
            },
            {
                text: 'Pop',
                desc: 'pop songs'
            },
            {
                text: 'Jazz',
                desc: 'jazz music'
            },
            {
                text: 'Electro',
                desc: 'electro sound'
            },
            {
                text: 'Hip hop',
                desc: 'Hip hop beats'
            }
        ];

    });


