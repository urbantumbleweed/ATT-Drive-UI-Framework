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
              scope.currentIndex = 0;
              var changePositionInterval = 5, // seconds
                  changePositionTimeInterval = 500, // miliseconds                 
                  intervalpromise = null,
                  secondsleft = 0,
                  secondsElapsed = 0,
                  sliderInterval = null,
                  intervalCounter = 0;

              if (scope.playlist && scope.playlist.length > 0) {
                  scope.audio = document.createElement("audio");
                  if (scope.audio != null && scope.audio.canPlayType && scope.audio.canPlayType("audio/mpeg")) {
                      scope.audio.src = scope.playlist[scope.currentIndex];

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
                  scope.audio.currentTime = scope.sliderConfig.val;
                  secondsElapsed = scope.audio.currentTime;
                  scope.sliderConfig.elapsedTime = secondsElapsed;
                  secondsleft = scope.audio.duration - scope.sliderConfig.val;
                  scope.sliderConfig.remainingTime = secondsleft;
              };

              scope.$on("sliderMoved", function (event, message) {
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

              scope.repeat = function () {
                  scope.audio.currentTime = 0;
                  startPlayer(true);
              };

              scope.shuffle = function () {
                  var currentSong = scope.playlist[scope.currentIndex];

                  scope.playlist.sort(function () {
                      return .5 - Math.random();
                  });

                  angular.forEach(scope.playlist, function (song, index) {
                      if (song == currentSong)
                          scope.currentIndex = index;
                  });

              };

              scope.changePosition = function (rewind, stop) {
                  if (stop) { // key released, stop changing position   
                      $interval.cancel(intervalpromise);

                      // if user kept button pressed less than intervalCounter * 2
                      // then move to next song
                      // othwerwise it means there occured rewind/fast forward operations, so just reset the counter
                      if (intervalCounter < 2) {
                          var index = rewind ? -1 : 1;
                          intervalCounter = 0;
                          scope.changeFile(index);
                      }
                      else intervalCounter = 0;
                  }
                  else {
                      intervalpromise = $interval(function () {
                          intervalCounter++;
                          if (intervalCounter >= 2) {
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
                          }
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
                  scope.currentIndex += index;
                  if (!scope.playlist[scope.currentIndex]) {

                      // if the last song on the list is playing and user click "Next"
                      // then reset to 0
                      // otherwise, user clicked "Previous" while on first song
                      if (scope.playlist.length == scope.currentIndex)
                          scope.currentIndex = 0;
                      else scope.currentIndex = scope.playlist.length - 1;
                  }

                  scope.audio.src = scope.playlist[scope.currentIndex];
                  startPlayer(true);
              };

              scope.setFile = function (index) {
                  scope.currentIndex = index;
                  scope.audio.src = scope.playlist[scope.currentIndex];
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
