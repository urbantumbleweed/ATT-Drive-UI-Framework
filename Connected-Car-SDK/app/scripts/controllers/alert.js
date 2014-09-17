'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:BadgeCtrl
 * @description
 * # AlertCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('AlertCtrl', function ($scope) {
      $scope.customModel = true;

      $scope.runCustomCode = function () {

          //alert('On Close event called');

      };
      
      $scope.onClose = function () {
          //alert('on Close');
      };

      $scope.onClick = function () {
          //alert('on Click');
      };

      $scope.alerts = [];
      $scope.alerts.push({
          type: 'info',
          showIcon: false,
          showConfirmationBtn: true,
          buttonText: 'OK',
          onClose: $scope.onClose,
          onClick: $scope.onClick,
          autoCloseInterval: undefined,
          title: 'Sample alert title',
          text: 'Sample alert text'
      });

      $scope.showAlert = function () {

          $scope.alerts.push({
              type: $scope.type,
              showIcon: $scope.showIcon,
              showConfirmationBtn: $scope.showConfirmationBtn,
              buttonText: $scope.buttonText,
              onClose: $scope.onClose,
              onClick: $scope.onClick,
              autoCloseInterval: $scope.autoCloseInterval,
              title: $scope.title,
              text: $scope.text
          });

      };

      $scope.removeAlert = function (index) {
          $scope.alerts.splice(index, 1);
      };
  });

