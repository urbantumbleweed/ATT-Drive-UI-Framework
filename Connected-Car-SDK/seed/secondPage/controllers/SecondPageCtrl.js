'use strict';

angular.module('app')
  .controller('SecondPageCtrl', ["$scope", function ($scope) {

      //TODO: add $rootScope watcher for every variable set in dec.js
      var deregisterPoisWatch = $rootScope.$watch('pois', function (value, oldvalue) {
          if (!value || angular.equals(value, oldvalue)) return;

          console.info('Change detected on the pois namespace: ', value);
      });

      $scope.poiChange = function () {
          var poiCollection = {
              "id": "myPOI2",
              "comments": "2",
              "street": "2 Glenn Eagle Point",
              "postalCode": "30241",
              "city": "LaGrange",
              "region": "GA1234567",
              "country": "USA",
              "phone": "706-812-04061",
              "latitude": 32.9397660369202,
              "longitude": -83.96518993846634,
              "symbol": "AirPortIconImage",
              "type": "address",
              "visible": true,
              "selected": false
          };

          function resolve(res) {
              console.info("Pois set successfully: ", res);
          }

          function reject(error) {
              console.info("ERROR - problem with setting pois", error);
          }

          drive.navigation.pois.set(poiCollection).then(resolve, reject);
      };

      $scope.$on('$destroy', function () {
          //stop watching when scope is destroyed
          if (deregisterPoisWatch) deregisterPoisWatch();
      });
  }]);