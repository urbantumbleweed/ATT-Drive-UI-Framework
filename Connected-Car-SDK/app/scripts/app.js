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
            /*controller: 'DropdownCtrl'*/
        })
        .when('/dropdowniFrame', {
          templateUrl: 'views/dropdown/dropdowniFrame.html'
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
/*            controller: 'PinPadProviderCtrl'*/
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
        .when('/content', {
          templateUrl: 'views/content/content.html',
          controller: 'ContentCtrl'
        })
        .when('/footer', {
          templateUrl: 'views/footer/footer.html',
          controller: 'FooterCtrl'
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



  $rootScope.sideMenuItems = {
    vehicleAppsApi : [
      {
        text: 'Context initialization',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#context-initialization'
      },
      {
        text: 'Vehicle information',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#vehicle-information'
      },

      {
        text: 'Get Vehicle information',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#get-vehicle-information'
      },
      {
        text: 'Set Vehicle information',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#set-vehicle-information'
      },
      {
        text: 'Navigation',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#navigation'
      },
      {
        text: 'Identity',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#identity'
      },
      {
        text: 'Application and System Settings',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#application-and-system-settings'
      },
      {
        text: 'Notifications',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#notifications'
      },
      {
        text: 'Media',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#media'
      },
      {
        text: 'SMS',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#sms'
      },
      {
        text: 'Search service',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#search-service'
      },
      {
        text: 'Site Automation (Digital Life)',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#site-automation-digital-life'
      },
      {
        text: 'Subscribe to site automation',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/vehicle-apps-api#subscribe-to-site-automation'
      }
    ],
    vehicleUiApi : [
      {
        text: 'Alert',
        href: '#/alert',
        isSelected: false
      },
      {
        text: 'Badges',
        href: '#/badge',
        isSelected: false
      },
      {
        text: 'Buttons',
        href: '#/buttons',
        isSelected: false
      },
      {
        text: 'Carousel',
        href: '#/carousel',
        isSelected: false
      },
      {
        text: 'Checkbox',
        href: '#/checkbox',
        isSelected: false
      },
      {
        text: 'Content container',
        href: '#/content',
        isSelected: false
      },
      {
        text: 'Drawer',
        href: '#/drawer',
        isSelected: false
      },
      {
        text: 'Dropdown',
        href: '#/dropdown',
        isSelected: false
      },
      {
        text: 'Footer',
        href: '#/footer',
        isSelected: false
      },
      {
        text: 'Header',
        href: '#/header',
        isSelected: false
      },
      {
        text: 'List View',
        href: '#/listview',
        isSelected: false
      },
      {
        text: 'Loader',
        href: '#/loader',
        isSelected: false
      },
      {
        text: 'Menu',
        href: '#/menu',
        isSelected: false
      },
      {
        text: 'Modal',
        href: '#/modal',
        isSelected: false
      },
      {
        text: 'Progress bars',
        href: '#/progress-bar',
        isSelected: false
      },
      {
        text: 'Radio Buttons',
        href: '#/radio',
        isSelected: false
      },
      {
        text: 'Slider',
        href: '#/slider',
        isSelected: false
      },
      {
        text: 'Toggle Switch',
        href: '#/toggle-switch',
        isSelected: false
      },
      {
        text: 'Tabs',
        href: '#/tabs',
        isSelected: false
      },
      {
        text: 'Pin input pad',
        href: '#/pinPad',
        isSelected: false
      },
      {
        text: 'Pin pad code usage',
        href: '#/pinPadProvider',
        isSelected: false
      },
      {
        text: 'SIM card error',
        href: '#/simError',
        isSelected: false
      },
      {
        text: 'Media Player',
        href: '#/mediaPlayer',
        isSelected: false
      },
      {
        text: 'Grid system',
        href: '#/grid',
        isSelected: false
      }
    ],
    webAppsApi: [
      {
        text: 'Getting started',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/web-apps-api/getting-started'
      },
      {
        text: 'Sample Apps',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/web-apps-api/sample-apps'
      },
      {
        text: 'Know the Driver',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/web-apps-api/know-driver'
      },
      {
        text: 'Know the Car',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/web-apps-api/know-car'
      },
      {
        text: 'Control the Car',
        href: 'http://attgarage.msg.betelab.ericy.com:443/driveSdk/#/api-docs/web-apps-api/control-car'
      },
    ],
    topLevelRoutes: [
      {
        text: 'Car App Framework',
        href: '#/',
        isSelected: false
      },
      {
        text: 'UI Components',
        href: '#/alert',
        isSelected: false
      }
    ]
  };

  $rootScope.markAsSelected = function(item){
    angular.forEach($rootScope.sideMenuItems.vehicleUiApi, function(i){
      i.isSelected = false;
    });
    angular.forEach($rootScope.sideMenuItems.topLevelRoutes, function(i){
      i.isSelected = false;
    });
    item.isSelected = true;
  };


});
