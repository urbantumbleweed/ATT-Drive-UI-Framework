'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.alert.directive:attAlert
 * @description
 * # attAlert
 */
angular.module('connectedCarSDK.alert', [])
    .directive('attAlert', [
        '$timeout', function($timeout) {

            return {
                restrict: 'AE',
                templateUrl: '/templates/alert.html',
                transclude: true,
                replace: true,
                scope: {
                    type: '@',              // info, success, danger
                    showCloseBtn: '@',      // true/false
                    close: '&',             // function/callback
                    autoCloseInterval: '@', // in miliseconds
                    showIcon: '@',          // true/false
                    title: '@'              // string
                },
                link: function(scope, element, attrs) {

                    console.log('Alert Type: ', scope.type);
                    console.log('Show Close Button: ', scope.showCloseBtn);
                    console.log('Close Callback: ', scope.close);
                    console.log('Auto Close Interval: ', scope.autoCloseInterval);
                    console.log('Show Icon: ', scope.showIcon);

                    var timeoutPromise;
                    if (scope.autoCloseInterval && parseInt(scope.autoCloseInterval) > 0) {

                        timeoutPromise = $timeout(function() {

                            scope.closeAlert = true;
                            scope.close();

                        }, scope.autoCloseInterval);

                    }

                    scope.onClose = function() {
                        if (timeoutPromise)
                            $timeout.cancel(timeoutPromise);

                        scope.closeAlert = true;
                        scope.close();
                    };

                }
            };

        }
    ]);
