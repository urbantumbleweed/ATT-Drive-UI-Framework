'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.dropdown.directive:attDropdown
 * @description
 * # attDropdown
 */
angular.module('connectedCarSDK.attDropdown', [])
    .directive('attDropdown', [
        '$timeout', function($timeout) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: function(tElement, tAttrs) {
                  return tAttrs.templateUrl || 'templates/attDropdown.html';
                },
                require: '^ngModel',
                scope: {
                    ngModel: '=',
                    defaultOption: '@',
                    items: '=',
                    closeButton: '@'
                },
                link: function(scope) {

                    scope.show = false;

                    if (scope.ngModel !== null && scope.ngModel !== undefined) {
                        $timeout(function() {
                            scope.defaultOption = scope.ngModel.text;
                        });
                    }

                    scope.selectItem = function(item) {
                        scope.ngModel = item;
                        scope.defaultOption = scope.ngModel.text;
                        scope.show = false;
                    };
                }
            };
        }
    ]);
