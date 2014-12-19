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
          {
              title: 'I Want To Break Free',
              author: 'Queen',
              src: 'audio/I Want To Break Free.mp3',
              art: 'http://netstorage.metrolyrics.com/blog/wp-content/uploads/2013/04/DemiAlbumArt.jpg'
          },
          {
              title: 'We Will Rock You',
              author: 'Nickelback',
              src: 'audio/We Will Rock You.mp3'
          },
          {
              title: 'Happy',
              author: 'Pharrell Williams',
              src: 'audio/Happy.mp3'
          },
          {
              title: '',
              author: '',
              src: 'audio/unavailable resource.mp3'
          }
      ];

  });


