'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.alert.directive:attAlert
 * @description
 * # attAlert
 */
angular.module('connectedCarSDK.attAlert', [])
    .directive('attAlert', [
        '$timeout', function($timeout) {

            return {
                restrict: 'AE',
                templateUrl: '/templates/attAlert.html',
                transclude: true,
                replace: true,
                scope: {
                    type: '=',                  // info, success, danger
                    showIcon: '=',              // true/false (if showConfirmationBtn is set to true, icon will not be shown)
                    showConfirmationBtn: '=',   // true/false (takes precedence over icon)
                    buttonText: '=',            // string
                    onClick: '&',               // function/callback for confirmation button click
                    onClose: '&',               // function/callback for when the alert is closed
                    autoCloseInterval: '=',     // in miliseconds
                    title: '=',                 // string
                    text: '='                   // string
                },
                link: function(scope, element, attrs) {

                    console.log('Show Confirmation Button', scope.showConfirmationBtn);
                    console.log('Button Text', scope.buttonText);
                    console.log('Alert Text', scope.text);

                    var timeoutPromise;
                    if (scope.autoCloseInterval && parseInt(scope.autoCloseInterval) > 0) {

                        timeoutPromise = $timeout(function() {

                            scope.closeAlert = true;
                            scope.close();

                        }, scope.autoCloseInterval);

                    }

                    scope.close = function () {

                        // if there is no confirmation button
                        // tapping anywhere on the alert will close the alert
                        // otherwise, you must dismiss the alert by clicking
                        // on the confirmation button
                        if (scope.showConfirmationBtn != true) {

                            if (timeoutPromise)
                                $timeout.cancel(timeoutPromise);

                            scope.closeAlert = true;
                            scope.onClose();

                        }
                    };

                }
            };

        }
    ]);
