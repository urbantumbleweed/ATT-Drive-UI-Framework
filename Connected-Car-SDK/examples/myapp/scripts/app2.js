"use strict";

var app = angular.module('app2', [
]);

angular.module('connectedCarSDK')
  .controller('ContentCtrl', ['$scope', function($scope){
    $scope.hasHeader = true;
    $scope.hasFooter = false;
    $scope.bgImg = '/images/content-bg.png';
    var images = [
      '/images/content-bg.png',
      '/images/interior-1.jpg',
      '/images/interior-2.jpg',
      '/images/interior-3.jpg',
    ];
    var bgIndex = 0;
    $scope.toggleHeader = function(){
      $scope.hasHeader = !$scope.hasHeader;
    };
    $scope.toggleFooter = function(){
      $scope.hasFooter = ! $scope.hasFooter;
    };
    $scope.toggleBackground = function(){
      bgIndex++;
      if(bgIndex === images.length) bgIndex = 0;
      $scope.bgImg = images[bgIndex];
    };
  }]);

app.config(function ($routeProvider) {

});



app.run(function ($rootScope) {
    window.$rootScope = $rootScope;

    $rootScope.appName = 'ATT Realtor Fleet';
    $rootScope.showDrawer = true;


});
