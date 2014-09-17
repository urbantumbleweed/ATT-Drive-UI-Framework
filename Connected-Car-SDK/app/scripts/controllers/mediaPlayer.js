'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:MediaPlayerCtrl
 * @description
 * # MediaPlayerCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('MediaPlayerCtrl', function ($scope) {

      $scope.playlist = [
          "audio/I Want To Break Free.mp3",
          "audio/We Will Rock You.mp3",
          "audio/Happy.mp3"
      ];

  });


