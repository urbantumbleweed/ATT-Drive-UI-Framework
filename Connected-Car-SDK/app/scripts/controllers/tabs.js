'use strict';

/**
 * @ngdoc function
 * @name connectedCarSDK.controller:TabsCtrl
 * @description
 * # ToggleSwitchCtrl
 * Controller of the connectedCarSDK
 */

angular.module('connectedCarSDK')
  .controller('TabsCtrl', function ($scope) {
      $scope.tabs = [
        { title: 'Dynamic Title 1', content: 'Dynamic content 1 abc' },
        { title: 'Disabled Tab', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem eos, eum ex impedit maxime mollitia officiis quos sint! Corporis doloremque eum ipsa iure maiores molestias quis totam, veniam veritatis.', disabled: true },
        { title: 'Active Tab', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magni neque nisi odit perferendis, quas quasi quo repudiandae ut voluptatibus. A accusantium adipisci animi deserunt error, molestias natus praesentium unde!', active: true }
      ];
  });


