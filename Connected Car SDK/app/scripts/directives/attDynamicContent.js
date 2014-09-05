'use strict';

/**
 * @ngdoc directive
 * @name connectedCarSDK.attDynamicContent.directive:attDynamicContent
 * @description
 * # attDynamicContent
 */
angular.module('connectedCarSDK.attDynamicContent', [])
  .directive('attDynamicContent', ['$http', '$location', function ($http, $location) {
      return {
          restrict: 'E',
          templateUrl: '/templates/attDynamicContent.html',
          replace: true,
          scope: {

          },
          link: function (scope, element, attrs) {

              scope.data = null;

              if (angular.isDefined(attrs.url)) {

                  var url = $location.protocol() + "://" + $location.host() + ":" + $location.port() + attrs.url;

                  $http.get(url).success(function (data) {
                      scope.data = data;
                  });
              }

          }
      };
  }]);