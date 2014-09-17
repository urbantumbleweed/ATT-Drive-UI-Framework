'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSdk.alert.directive:attAlert
 * @description
 * # attAlert
 */
angular.module('connectedCarSDK.attAlert', [])
    .factory('alertProvider', [ '$timeout', function ($timeout) {
        return {
            alerts: [],
            timeoutPromise: null,

            addAlert: function (alert) {
                if (this.alerts.length == 0)
                    alert.isActive = true;

                this.alerts.push(alert);
            },

            removeActiveAlert: function () {
                this.alerts[0].isActive = false;
                this.alerts.splice(0, 1);

                if (this.alerts.length > 0)
                    this.alerts[0].isActive = true;
            },

            closeAlert: function () {
                // if there is no confirmation button
                // tapping anywhere on the alert will close the alert
                // otherwise, you must dismiss the alert by clicking
                // on the confirmation button
                if (!this.alerts[0].showConfirmationBtn) {
                    if (this.timeoutPromise)
                        $timeout.cancel(this.timeoutPromise);

                    this.alerts[0].onClose();
                }

                this.removeActiveAlert();
                this.handleAutoClose();
            },

            handleAutoClose: function () {                
                if (this.alerts[0] && this.alerts[0].autoCloseInterval && parseInt(this.alerts[0].autoCloseInterval) > 0) {
                    var that = this;
                    this.timeoutPromise = $timeout(function () {
                        that.closeAlert();
                    }, this.alerts[0].autoCloseInterval);
                }
            }
        }
    }])
    .directive('attAlert', [
         'alertProvider', function (alertProvider) {
            return {
                restrict: 'AE',
                templateUrl: 'templates/attAlert.html',
                replace: true,
                link: function (scope, element, attrs) {

                    alertProvider.addAlert(scope.alert);

                    if (scope.alert.isActive)
                        alertProvider.handleAutoClose();

                    scope.close = function () {
                        alertProvider.closeAlert();
                    };

                }
            };

        }
    ]);
