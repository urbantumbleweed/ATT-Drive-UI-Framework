'use strict';

/**
 * @ngdoc overview
 * @name connectedCarSDK
 * @description
 * # connectedCarSDK
 *
 * Main module of the application.
 */
var app = angular
  .module('connectedCarSDK', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'connectedCarSDK.attToggleSwitch',
    'connectedCarSDK.attTab',
    'connectedCarSDK.attProgressBar',
    'connectedCarSDK.attCarousel',
    'connectedCarSDK.attAlert',
    'connectedCarSDK.attButtons',
    'connectedCarSDK.attDropdown',
    'connectedCarSDK.attLoader',
    'connectedCarSDK.attBadge',
    'connectedCarSDK.attListView',
    'connectedCarSDK.attModal',
    'connectedCarSDK.attMenu',
    'connectedCarSDK.attDrawer',
    'connectedCarSDK.attHeader',
    'connectedCarSDK.attSlider',
    'connectedCarSDK.attMediaPlayer',
    'connectedCarSDK.attDynamicContent',
    'connectedCarSDK.attPinPad',
    'connectedCarSDK.attContent',
    'connectedCarSDK.attFooter',
    'connectedCarSDK.attSimError'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/toggle-switch', {
            templateUrl: 'views/toggleSwitch/toggleSwitch.html',
            controller: 'ToggleSwitchCtrl'
        })
        .when('/tabs', {
            templateUrl: 'views/tabs/tabs.html',
            controller: 'TabsCtrl'
        })
        .when('/progress-bar', {
            templateUrl: 'views/progressBar/progressBar.html',
            controller: 'ProgressBarCtrl'
        })
        .when('/carousel', {
            templateUrl: 'views/carousel/carousel.html',
            controller: 'CarouselCtrl'
        })
        .when('/buttons', {
            templateUrl: 'views/buttons/buttons.html',
            controller: 'ButtonsCtrl'
        })
        .when('/alert', {
            templateUrl: 'views/alert/alert.html',
            controller: 'AlertCtrl'
        })
        .when('/dropdown', {
            templateUrl: 'views/dropdown/dropdown.html',
            controller: 'DropdownCtrl'
        })
        .when('/dropdowniFrame', {
          templateUrl: 'views/dropdown/dropdowniFrame.html',
          controller: 'DropdownCtrl'
        })
        .when('/loader', {
            templateUrl: 'views/loader/loader.html',
            controller: 'LoaderCtrl'
        })
        .when('/badge', {
            templateUrl: 'views/badge/badge.html',
            controller: 'BadgeCtrl'
        })
        .when('/modal', {
            templateUrl: 'views/modal/modal.html',
            controller: 'ModalCtrl'
        })
        .when('/radio', {
            templateUrl: 'views/radio/radio.html',
            controller: 'RadioBtnCtrl'
        })
        .when('/checkbox', {
            templateUrl: 'views/checkbox/checkbox.html'

        })
        .when('/listview', {
            templateUrl: 'views/listView/listView.html',
            controller: 'ListViewCtrl'
        })
        .when('/drawer', {
            templateUrl: 'views/drawer/drawer.html',
            controller: 'DrawerCtrl'
        })
        .when('/menu', {
            templateUrl: 'views/menu/menu.html',
            controller: 'MenuCtrl'
        })
        .when('/header', {
            templateUrl: 'views/header/header.html',
            controller: 'HeaderCtrl'
        })
        .when('/slider', {
            templateUrl: 'views/slider/slider.html',
            controller: 'SliderCtrl'
        })
        .when('/mediaPlayer', {
            templateUrl: 'views/mediaPlayer/mediaPlayer.html',
            controller: 'MediaPlayerCtrl'
        })
        .when('/pinPad', {
            templateUrl: 'views/pinPad/pinPad.html',
            controller: 'PinPadCtrl'
        })
        .when('/pinPadProvider', {
            templateUrl: 'views/pinPad/pinPadProvider.html',
            controller: 'PinPadProviderCtrl'
        })
        .when('/pinPadProvideriFrame', {
            templateUrl: 'views/pinPad/pinPadProvideriFrame.html',
            controller: 'PinPadProviderCtrl'
        })
        .when('/simError', {
            templateUrl: 'views/simError/simError.html'

        })
        .when('/grid', {
          templateUrl: 'views/grid/grid.html'

        })

      .when('/simErroriFrame', {
        templateUrl: 'views/simError/simErroriFrame.html'

      })
        .otherwise({
            redirectTo: '/'
        });
});


app.run(function ($rootScope, $timeout) {

    $rootScope.$on('$routeChangeSuccess',
        function () {
            $timeout(function() {
                window.prettyPrint();
            }, 500);

        });

    $rootScope.isContentInIFrame = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };
});
