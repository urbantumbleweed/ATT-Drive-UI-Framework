'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.progressbar.directive:attProgressbar
 * @description
 * # attprogressbar
 */
angular.module('connectedCarSDK.attProgressBar', [])
 .constant('progressConfig', {
     animate: true,
     max: 100
 })

.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function ($scope, $attrs, progressConfig) {
    var self = this,
        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

    this.bars = [];
    $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;

    this.addBar = function (bar, element) {
        if (!animate) {
            element.css({ 'transition': 'none' });
        }

        this.bars.push(bar);

        bar.$watch('value', function (value) {
            bar.percent = +(100 * value / $scope.max).toFixed(2);
        });

        bar.$on('$destroy', function () {
            element = null;
            self.removeBar(bar);
        });
    };

    this.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
}])

.directive('attProgressBar', function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        scope: {
            value: '=',
            type: '@'
        },
        templateUrl: '/templates/attProgressBar.html',
        link: function (scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
    };
});
