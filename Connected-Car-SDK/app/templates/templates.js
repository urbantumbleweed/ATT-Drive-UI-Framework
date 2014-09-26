angular.module('connectedCarSDK.tpls', ['templates/attAlert.html', 'templates/attBadge.html', 'templates/attDrawer.html', 'templates/attDropdown.html', 'templates/attHeader.html', 'templates/attListView.html', 'templates/attLoader.html', 'templates/attMediaPlayer.html', 'templates/attMenu.html', 'templates/attPinPad.html', 'templates/attProgressBar.html', 'templates/attSlider.html', 'templates/attToggleSwitch.html', 'templates/carousel/carousel.html', 'templates/carousel/slide.html', 'templates/modal/backdrop.html', 'templates/modal/window.html', 'templates/tabs/attTab.html', 'templates/tabs/attTabset.html']);

angular.module("templates/attAlert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attAlert.html",
    "<div ng-show=\"alert.isActive\" class=\"att-alert\" ng-class=\"alert.type && 'alert-' + alert.type\" ng-click=\"close()\">\n" +
    "    <div class=\"content\">\n" +
    "        <h1 class=\"alert-heading\" ng-bind=\"alert.title\"></h1>\n" +
    "        <!--<p class=\"alert-text\" ng-bind=\"alert.text\"></p>-->\n" +
    "        <p class=\"alert-text\" ng-transclude></p>\n" +
    "    </div>\n" +
    "    <span class=\"alert-icon {{type}}\" ng-show=\"alert.showIcon && !alert.showConfirmationBtn\">\n" +
    "            <i class=\"fa fa-info-circle\"></i>\n" +
    "    </span>\n" +
    "    <div class=\"alert-button\">\n" +
    "        <button class=\"btn btn-default\" ng-show=\"alert.showConfirmationBtn\" ng-click=\"btnClick()\">{{alert.buttonText}}</button>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("templates/attBadge.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attBadge.html",
    "<span class=\"att-badge badge-{{badgeType}}\">\n" +
    "    {{value}}\n" +
    "</span>");
}]);

angular.module("templates/attDrawer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attDrawer.html",
    "<div class=\"att-drawer\" ng-class=\"{visible: showDrawer == true}\">\n" +
    "    <div ng-transclude></div>\n" +
    "    <div class=\"close-area\" ng-click=\"closeDrawer()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/attDropdown.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attDropdown.html",
    "<div class=\"att-dropdown\">\n" +
    "    <a class=\"selected\" ng-bind=\"defaultOption\" ng-click=\"show=!show\"></a>\n" +
    "    <span class=\"icon\"><i class=\"fa fa-caret-down\"></i></span>\n" +
    "    <div class=\"screen\" ng-show=\"show\">\n" +
    "        <button ng-show=\"closeButton\" type=\"button\" class=\"btn btn-circ medium btn-close-list\" ng-click=\"show=false\"><span class=\"icon-close\"></span></button>\n" +
    "        <ul class=\"list\">\n" +
    "            <li ng-repeat=\"item in items\" ng-click=\"selectItem(item)\">{{item.text}}</li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/attHeader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attHeader.html",
    "<div class=\"att-header\">\n" +
    "    <h3 class=\"active-screen\">\n" +
    "        \n" +
    "        <i ng-show=\"backButton\" ng-click=\"backCallback()\" id=\"back-icon\" class=\"icon-back\"></i>\n" +
    "        <span>{{currentItem}}</span>\n" +
    "    </h3>\n" +
    "    <a class=\"drawer-trigger pull-right sep-l-24\">\n" +
    "            <span id=\"menu-icon\" class=\"icon-menu separate-left-10\" ng-click=\"openMenu()\"></span>\n" +
    "    </a>\n" +
    "    <div class=\"app-branding\">\n" +
    "        <span class=\"app-name\" ng-bind=\"appName\"></span>\n" +
    "        <img class=\"app-icon\" ng-src=\"{{appImage}}\">\n" +
    "        \n" +
    "    </div>\n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/attListView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attListView.html",
    "<div class=\"att-list-view\">\n" +
    "    <h3 class=\"active-screen\" ng-bind=\"title\"></h3>\n" +
    "    <ul class=\"list\">\n" +
    "        <li ng-repeat=\"item in items\"\n" +
    "            ng-class=\"{active: item.selected}\"\n" +
    "            ng-click=\"onItemClick(item)\">\n" +
    "            {{item.text}}\n" +
    "            <span ng-bind=\"item.desc\"></span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("templates/attLoader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attLoader.html",
    "<div class=\"att-loader\">\n" +
    "    <div class=\"circles\">\n" +
    "        <div id=\"circle1\" class=\"animated-circle\"></div>\n" +
    "        <div id=\"circle2\" class=\"animated-circle\"></div>\n" +
    "        <div id=\"circle3\" class=\"animated-circle\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/attMediaPlayer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attMediaPlayer.html",
    "<div class=\"padding\" style=\"padding-top: 20px\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <h2 class=\"view-title\">{{audio.attributes.src.value.replace(\"audio/\", \"\")}}</h2>\n" +
    "            <h4 class=\"view-subtitle\">Queen</h2>\n" +
    "            <h4 class=\"text-uppercase text-muted\">Next: <span class=\"font-medium\">Happy</span></h4>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group-media sep-t-40\">\n" +
    "        <a ng-mousedown=\"changePosition(true, false)\" ng-mouseup=\"changePosition(true, true)\" class=\"btn btn-circ small\"><span class=\"icon-skip-left\"></span></a>\n" +
    "        <a ng-click=\"changeStatus()\" class=\"btn btn-circ large sep-lr-40\"><span ng-class=\"{'icon-pause' : (!audio.paused), 'icon-play' : audio.paused}\"></span></a>\n" +
    "        <a ng-mousedown=\"changePosition(false, false)\" ng-mouseup=\"changePosition(false, true)\" class=\"btn btn-circ small\"><span class=\"icon-skip-right\"></span></a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div style=\"position: absolute; bottom: 0; left: 0; width: 100%; padding: 0 24px 36px;\">\n" +
    "        <a class=\"btn btn-icon sep-r-40\"><span class=\"icon-shuffle\" ng-click=\"shuffle()\"></span></a>\n" +
    "        <a class=\"btn btn-icon\"><span class=\"icon-repeat\" ng-click=\"repeat()\"></span></a>\n" +
    "        <a class=\"btn btn-icon pull-right\"><span class=\"icon-volume-down\"></span></a>\n" +
    "        <div class=\"sep-top-10\">\n" +
    "            <att-slider type=\"default\"\n" +
    "                min=\"{{sliderConfig.min}}\"\n" +
    "                max=\"{{sliderConfig.max}}\"\n" +
    "                ng-model=\"sliderConfig.val\"\n" +
    "                text-left=\"{{sliderConfig.elapsedTime | filter: countdown(true)}}\"\n" +
    "                text-right=\"{{sliderConfig.remainingTime | filter: countdown(false)}}\">\n" +
    "            </att-slider>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div style=\"display: none\" ng-repeat=\"song in playlist\" ng-class=\"{'active-song' : currentIndex == $index}\" ng-click=\"setFile($index)\">\n" +
    "        <span ng-bind=\"song\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<a ng-click=\"changeVolume(changeVolumeQuantity)\">Volume up</a>\n" +
    "    <a ng-click=\"changeVolume(-changeVolumeQuantity)\">Volume down</a>-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/attMenu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attMenu.html",
    "<div class=\"att-menu\">\n" +
    "    <h3 class=\"active-screen\" ng-bind=\"title\"></h3>\n" +
    "    <ul class=\"list\">\n" +
    "        <li ng-repeat=\"item in items\"\n" +
    "            ng-class=\"{active: item.selected}\"\n" +
    "            ng-click=\"onItemClick(item)\">\n" +
    "            <a ng-href=\"{{item.href}}\">{{item.text}}\n" +
    "            <span ng-bind=\"item.desc\"></span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/attPinPad.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attPinPad.html",
    "<div class=\"att-pin-pad\">\n" +
    "    <div class=\"title\">\n" +
    "        <h1>Enter driver PIN</h1>\n" +
    "        <p>Four-digit PIN</p>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"left\">\n" +
    "        <div class=\"input-fields\">\n" +
    "            <input type=\"password\" ng-model=\"ngModel\">\n" +
    "            <button id=\"backspace\" class=\"btn btn-default\" ng-click=\"backspace()\"><i class=\"fa fa-chevron-left\"></i></button>\n" +
    "            <button id=\"confirm\" class=\"btn btn-default\" ng-click=\"onConfirm()\" ng-disabled=\"isDisabled()\"><i class=\"fa fa-check fa-2x\"></i></button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"right\">\n" +
    "        <div class=\"keypad\">\n" +
    "            <div class=\"panel-row\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(1)\">1</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(2)\">2</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(3)\">3</button>\n" +
    "            </div>\n" +
    "            <div class=\"panel-row\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(4)\">4</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(5)\">5</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(6)\">6</button>\n" +
    "            </div>\n" +
    "            <div class=\"panel-row\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(7)\">7</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(8)\">8</button>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(9)\">9</button>\n" +
    "            </div>\n" +
    "            <div class=\"panel-row\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"appendToPin(0)\">0</button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/attProgressBar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attProgressBar.html",
    "<div class=\"att-progress-bar\">\n" +
    "    <span class=\"label\">{{textLeft}}</span>\n" +
    "    <span class=\"value\">{{textRight}}</span>\n" +
    "    <div class=\"progress-bar-background\">\n" +
    "        <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"{{min}}\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\"> </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/attSlider.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attSlider.html",
    "<div class=\"range-slider\">\n" +
    "    <span class=\"value-left\">{{textLeft}}</span>\n" +
    "    <span class=\"value-right\">{{textRight}}</span>\n" +
    "    <input class=\"input-range input-range-{{type}}\" type=\"range\" ng-model=\"ngModel\" min=\"{{min}}\" max=\"{{max}}\" ng-mouseup=\"sliderMoved()\">\n" +
    "</div> ");
}]);

angular.module("templates/attToggleSwitch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/attToggleSwitch.html",
    "<div class=\"att-toggle-switch\" >\n" +
    "    <div ng-class=\"{on: ngModel == true , off: ngModel == false}\">\n" +
    "        <div class=\"btn-group\">\n" +
    "            <span class=\"btn btn-primary\" ng-model=\"ngModel\" ng-click=\"click(false)\" btn-radio=\"OFF\">OFF</span>\n" +
    "            <span class=\"btn btn-primary\" ng-model=\"ngModel\" ng-click=\"click(true)\" btn-radio=\"ON\">ON</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/carousel/carousel.html",
    "<div class=\"att-carousel\">\n" +
    "    <div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "        <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "            <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "        </ol>\n" +
    "        <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "        <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"fa fa-chevron-left\"></span></a>\n" +
    "        <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"fa fa-chevron-right\"></span></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': leaving || (active && !entering),\n" +
    "    'prev': (next || active) && direction=='prev',\n" +
    "    'next': (next || active) && direction=='next',\n" +
    "    'right': direction=='prev',\n" +
    "    'left': direction=='next'\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>");
}]);

angular.module("templates/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/modal/backdrop.html",
    "<div class=\"modal-backdrop fade {{ backdropClass }}\"\n" +
    "    ng-class=\"{in: animate}\"\n" +
    "    ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/modal/window.html",
    "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
    "    <div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\">\n" +
    "        <div class=\"att-modal\">\n" +
    "            <div class=\"modal-content\" modal-transclude></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/tabs/attTab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/tabs/attTab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "    <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("templates/tabs/attTabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/tabs/attTabset.html",
    "<div class=\"att-tabs\">\n" +
    "    <div class=\"tab-content\" ng-class=\"{'nav-stacked': vertical, 'top': topPosition}\">\n" +
    "        <div class=\"tab-pane\"\n" +
    "             ng-repeat=\"tab in tabs\"\n" +
    "             ng-class=\"{active: tab.active}\"\n" +
    "             tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"nav\" ng-class=\"{'nav-stacked': vertical, 'top': topPosition}\" ng-transclude></ul>\n" +
    "    <span id=\"justify\"></span> <!-- Important for alignment - do not remove -->\n" +
    "</div>\n" +
    "");
}]);
