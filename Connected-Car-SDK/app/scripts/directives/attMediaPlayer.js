'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.directive:attMediaPlayer
 * @description
 * # attMediaPlayer
 */
angular.module('connectedCarSDK.attMediaPlayer', [])
  .directive('attMediaPlayer', ['$http', '$interval', '$timeout', '$document', function ($http, $interval, $timeout, $document) {
      return {
          restrict: 'E',
          replace: true,
          templateUrl: function (tElement, tAttrs) {
              if (tAttrs.templateUrl === undefined) {
                  return 'templates/attMediaPlayer.html';
              } else {
                  return tAttrs.templateUrl;
              }
          },
          scope: {
              playlist: '=',
              autoplay: '='
          },
          link: function (scope) {

              scope.audio = null;
              scope.sliderConfig = { val: 0 };
              scope.currentIndex = 0;
              scope.repeatActive = false;
              scope.shuffleActive = false;
              scope.audioPaused = false;

              // volume data
              scope.showVolume = false;
              scope.currentVolume = 50;
              scope.minVolume = 0;
              scope.maxVolume = 100;
              scope.changeVolumeQuantity = 10;

              // volume slider parameters
              scope.volumeSliderMovingInterval = null;
              scope.volumeInactive = true;
              scope.volumeInactivityInterval = null;
              scope.volumeInativityTime = 2000;

              var changePositionInterval = 5, // seconds
                  changePositionTimeInterval = 500, // miliseconds                 
                  intervalpromise = null,
                  secondsleft = 0,
                  secondsElapsed = 0,
                  sliderInterval = null,
                  intervalCounter = 0;

              function init() {
                  if (scope.playlist && scope.playlist.length > 0) {

                      var audioEl = $document.find('body').find('audio');

                      if (audioEl.length === 0) {
                          audioEl = document.createElement('audio');
                          scope.audio = audioEl;
                      } else {
                          scope.audio = audioEl[0];
                      }

                      $document.find('body').eq(0).append(audioEl);

                      scope.audio.addEventListener('error', function () {
                          console.log('error loading file');
                          // invalidate current file in the playlist
                          scope.playlist[scope.currentIndex].isValid = false;
                          if (sliderInterval)
                              $interval.cancel(sliderInterval);
                          scope.changeFile(1, true);
                      });

                      if (scope.audio !== null && scope.audio.canPlayType && scope.audio.canPlayType('audio/mpeg')) {
                          scope.audio.src = scope.playlist[scope.currentIndex].src;

                          if (scope.autoplay) {
                              startPlayer(true);
                          }
                      }
                  }
              }

              init();

              //Init playlist only when playlist is populated and was empty before
              scope.$watchCollection('playlist', function (newPlaylist, oldPlaylist) {
                  if (!scope.playlist || (oldPlaylist && oldPlaylist.length > 0)) {
                      return;
                  }
                  init();
                  scope.changeFile(0);
              });

              function startPlayer(reset) {
                  if (reset && sliderInterval)
                      $interval.cancel(sliderInterval);

                  var counter = 0;
                  var maxValue = 100;

                  var intervalDuration = $interval(function () {
                      var isDurationAvailable = !isNaN(scope.audio.duration);
                      if (counter >= maxValue || isDurationAvailable) {
                          $interval.cancel(intervalDuration);

                          if (isDurationAvailable) {
                              scope.audio.play();
                              setupSlider(reset);
                          }
                      }
                      counter++;
                  }, 50);
              }

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

                  if (sliderInterval)
                      $interval.cancel(sliderInterval);

                  // setup count down timer
                  sliderInterval = $interval(function () {
                      if (parseInt(secondsleft) === 0) { // if time elapsed, move to next file
                          $interval.cancel(sliderInterval);
                          scope.changeFile(1);
                          return;
                      }

                      secondsleft--;
                      secondsElapsed++;
                      scope.sliderConfig.val++;
                  }, 1000);
              }

              function setTime() {
                  $timeout(function () {
                      scope.audio.currentTime = scope.sliderConfig.val;
                      secondsElapsed = scope.audio.currentTime;
                      scope.sliderConfig.elapsedTime = secondsElapsed;
                      secondsleft = scope.audio.duration - scope.sliderConfig.val;
                      scope.sliderConfig.remainingTime = secondsleft;
                  }, 100);
              }

              function setVolume() {
                  scope.audio.volume = (scope.currentVolume / 100);
              }

              function change(manuallyChanged) {
                  if (!scope.validateSong()) {
                      scope.changeFile(1, manuallyChanged);
                      return;
                  }

                  scope.audio.src = scope.playlist[scope.currentIndex].src;

                  if (!scope.audioPaused)
                      startPlayer(true);
                  else {
                      //scope.sliderConfig.val = 0;
                      setupSlider(true);
                      setTime();
                      $interval.cancel(sliderInterval);
                  }
              }

              scope.$on('sliderMoved', function (event, message) {
                  if (message === 'time')
                      setTime();
                  else if (message === 'volume') {
                      scope.volumeInactive = false;
                      setVolume();
                      $interval.cancel(scope.volumeSliderMovingInterval);
                  }
              });

              scope.$on('sliderMoving', function (event, message) {
                  if (message === 'volume') {
                      scope.volumeInactive = false;

                      // setup an interval every 200 ms that will set scope.volumeInactive = false;
                      // that interval will be canceled at **
                      scope.volumeSliderMovingInterval = $interval(function () {
                          scope.volumeInactive = false;
                      }, 200);

                  }
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

                  if (min.toString().length === 1)
                      min = '0' + min;
                  if (sec.toString().length === 1)
                      sec = '0' + sec;

                  if (isElapsed)
                      scope.sliderConfig.elapsedTime = min + ':' + sec;
                  else scope.sliderConfig.remainingTime = '-' + min + ':' + sec;
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
                          scope.changeFile(index, true);
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

                  scope.audioPaused = !scope.audioPaused;

                  if (!scope.audio.paused && scope.audio.duration > 0) {
                      scope.audio.pause();
                      $interval.cancel(sliderInterval);
                  }
                  else startPlayer(false);
              };

              scope.changeFile = function (index, manuallyChanged) {

                  // NOTE: repeat has priority over shuffle
                  // if repeat functionality is enabled, do not increase current file index
                  if (scope.repeatActive) {
                      if (manuallyChanged)
                          scope.currentIndex += index;
                      change(manuallyChanged);
                  }
                  else if (!scope.repeatActive) {
                      if (scope.shuffleActive) { // check if shuffle is enabled
                          var randomIndex = scope.currentIndex;
                          //currentSong = scope.playlist[scope.currentIndex],

                          while (randomIndex === scope.currentIndex) // be sure that the random index is different from current index
                              randomIndex = Math.floor((Math.random() * scope.playlist.length) + 0);

                          scope.currentIndex = randomIndex;
                          change();
                      }
                      else {
                          scope.currentIndex += index;
                          change();
                      }
                  }
              };

              scope.validateSong = function () {
                  if (!scope.playlist[scope.currentIndex]) {

                      // if the last song on the list is playing and user click "Next"
                      // then reset to 0
                      // otherwise, user clicked "Previous" while on first song
                      if (scope.playlist.length === scope.currentIndex) {
                          scope.currentIndex = -1;
                      }
                      else scope.currentIndex = scope.playlist.length - 1;

                      return false;
                  }

                  if (scope.playlist[scope.currentIndex].isValid === false)
                      return false;

                  return true;
              };

              scope.volume = function () {
                  scope.showVolume = !scope.showVolume;

                  if (scope.showVolume) {

                      if (scope.volumeInactivityInterval)
                          $interval.cancel(scope.volumeInactivityInterval);

                      // start timer to calculate inactivity time
                      // if > 2 sec of inactivity, close the volume control
                      scope.volumeInactivityInterval = $interval(function () {

                          if (scope.volumeInactive) {
                              scope.showVolume = false;
                              $interval.cancel(scope.volumeInactivityInterval);
                          } else scope.volumeInactive = true;

                      }, scope.volumeInativityTime);
                  } else $interval.cancel(scope.volumeInactivityInterval);
              };

              scope.nextSong = function () {
                  if (!scope.playlist)
                      return false;

                  var index = scope.currentIndex;
                  if (scope.playlist.length === (scope.currentIndex + 1))
                      index = -1;
                  return scope.playlist && scope.playlist[index + 1];
              };

              scope.currentSong = function () {
                  if (!scope.playlist)
                      return false;
                  return scope.playlist[scope.currentIndex];
              };
          }
      };
  }]);
