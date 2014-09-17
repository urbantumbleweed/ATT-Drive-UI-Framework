'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.directive:attMediaPlayer
 * @description
 * # attMediaPlayer
 */
angular.module('connectedCarSDK.attMediaPlayer', [])
  .directive('attMediaPlayer', ['$http', '$interval', '$timeout', function ($http, $interval, $timeout) {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: 'templates/attMediaPlayer.html',
          scope: {
              playlist: "=",
              autoplay: "="
          },
          link: function (scope, element, attrs) {

              scope.audio = null;
              scope.sliderConfig = { val: 0 };
              scope.changeVolumeQuantity = 0.1;
              var currentIndex = 0,
                  changePositionInterval = 5, // seconds
                  changePositionTimeInterval = 500, // miliseconds                 
                  intervalpromise = null,
                  secondsleft = 0,
                  secondsElapsed = 0,
                  sliderInterval = null;

              if (scope.playlist && scope.playlist.length > 0) {
                  scope.audio = document.createElement("audio");
                  if (scope.audio != null && scope.audio.canPlayType && scope.audio.canPlayType("audio/mpeg")) {
                      scope.audio.src = scope.playlist[currentIndex];

                      if (scope.autoplay) {
                          startPlayer(true);
                      }
                  }
              }

              function startPlayer(reset) {
                  if (reset && sliderInterval)
                      $interval.cancel(sliderInterval);

                  scope.audio.play();
                  $timeout(function () {
                      setupSlider(reset);
                  }, 200);
              };

              function setupSlider(reset) {
                  if (reset) {
                      scope.sliderConfig = {
                          min: 0,
                          max: scope.audio.duration,
                          val: 0,
                          elapsedTime: 0,
                          remainingTime: scope.audio.duration
                      };

                      secondsleft = scope.audio.duration;
                      secondsElapsed = 0;
                  }

                  // setup count down timer
                  sliderInterval = $interval(function () {
                      if (parseInt(secondsleft) == 0) { // if time elapsed, move to next file
                          $interval.cancel(sliderInterval);
                          scope.changeFile(1);
                          return;
                      }

                      secondsleft--;
                      secondsElapsed++;
                      scope.sliderConfig.val++;
                  }, 1000);
              };

              function setTime() {
                  secondsElapsed = scope.audio.currentTime;
                  scope.audio.currentTime = scope.sliderConfig.val;
              };

              scope.$on("sliderMoved", function (event, message) {
                  secondsleft = scope.audio.duration - scope.sliderConfig.val;
                  setTime();
              });

              scope.countdown = function (isElapsed) {
                  var min, sec;
                  if (isElapsed) {
                      min = parseInt(secondsElapsed / 60);
                      sec = parseInt(secondsElapsed % 60);
                  } else {
                      min = parseInt(secondsleft / 60);
                      sec = parseInt(secondsleft % 60);
                  }

                  if (min.toString().length == 1)
                      min = "0" + min;
                  if (sec.toString().length == 1)
                      sec = "0" + sec;

                  if (isElapsed)
                      scope.sliderConfig.elapsedTime = min + ":" + sec;
                  else scope.sliderConfig.remainingTime = "-" + min + ":" + sec;
              };

              scope.changePosition = function (rewind, stop) {
                  if (stop) // key released, stop changing position                  
                      $interval.cancel(intervalpromise);
                  else {
                      intervalpromise = $interval(function () {
                          if (rewind) {
                              if (scope.audio.currentTime < changePositionInterval)
                                  scope.audio.currentTime = 0;
                              else scope.audio.currentTime -= changePositionInterval;
                          }
                          else {
                              if ((scope.audio.duration - scope.audio.currentTime) < changePositionInterval)
                                  scope.audio.currentTime = scope.audio.duration;
                              else scope.audio.currentTime += changePositionInterval;
                          }

                          scope.sliderConfig.val = scope.audio.currentTime;
                          setTime();

                      }, changePositionTimeInterval);
                  }
              };

              scope.changeStatus = function () {
                  if (!scope.audio.paused && scope.audio.duration > 0) {
                      scope.audio.pause();
                      $interval.cancel(sliderInterval);
                  }
                  else startPlayer(false);
              };

              scope.changeFile = function (index) {
                  currentIndex += index;
                  if (!scope.playlist[currentIndex]) {

                      // if the last song on the list is playing and user click "Next"
                      // then reset to 0
                      // otherwise, user clicked "Previous" while on first song
                      if (scope.playlist.length == currentIndex)
                          currentIndex = 0;
                      else currentIndex = scope.playlist.length - 1;
                  }

                  scope.audio.src = scope.playlist[currentIndex];
                  startPlayer(true);
              };

              scope.changeVolume = function (quantity) {
                  if ((scope.audio.volume + quantity) > 1 || (scope.audio.volume + quantity) < 0)
                      return;

                  scope.audio.volume += quantity;
              };

          }
      };
  }]);
