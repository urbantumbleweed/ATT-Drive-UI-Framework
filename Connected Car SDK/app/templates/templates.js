angular.module('templates-main', ['../app/templates/attAlert.html', '../app/templates/attBadge.html', '../app/templates/attListView.html', '../app/templates/attLoader.html', '../app/templates/attProgressBar.html', '../app/templates/attToggleSwitch.html', '../app/templates/carousel/carousel.html', '../app/templates/carousel/slide.html', '../app/templates/modal/backdrop.html', '../app/templates/modal/window.html', '../app/templates/tabs/attTab.html', '../app/templates/tabs/attTabset.html']);

angular.module("/templates/attAlert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attAlert.html",
    "<div class=\"att-alert\" ng-class=\"type && 'alert-' + type\" ng-hide=\"closeAlert\" ng-click=\"close()\">\n" +
    "    <div class=\"content\">\n" +
    "        <h1 class=\"alert-heading\" ng-bind=\"title\"></h1>\n" +
    "        <p class=\"alert-text\" ng-bind=\"text\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"alert-button\">\n" +
    "        <div class=\"btn btn-default\" ng-show=\"showConfirmationBtn\" ng-click=\"onClick()\">{{buttonText}}</div>\n" +
    "    </div>\n" +
    "    <span class=\"alert-icon {{type}}\" ng-show=\"showIcon && !showConfirmationBtn\">\n" +
    "        <i class=\"fa fa-ils\"></i>\n" +
    "    </span>\n" +
    "</div>");
}]);

angular.module("/templates/attBadge.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attBadge.html",
    "<span></span>");
}]);

angular.module("/templates/attListView.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attListView.html",
    "<div class=\"screen\">\n" +
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

angular.module("/templates/attLoader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attLoader.html",
    "<div style=\"display:none;\">Loader goes here...</div>\n" +
    "");
}]);

angular.module("/templates/attProgressBar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attProgressBar.html",
    "<div class=\"att-progress-bar\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\">\n" +
    "      <span class=\"label\" ng-transclude></span>\n" +
    "  </div>\n" +
    "    <span class=\"value\">{{value}}</span>\n" +
    "</div>");
}]);

angular.module("/templates/attToggleSwitch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/attToggleSwitch.html",
    "<div class=\"att-toggle-switch\">\n" +
    "    <div ng-class=\"{on: ngModel == true , off: ngModel == false}\">\n" +
    "        <div class=\"btn-group\">\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"ngModel\" ng-click=\"change(false)\" btn-radio=\"OFF\">OFF</label>\n" +
    "            <label class=\"btn btn-primary\" ng-model=\"ngModel\" ng-click=\"change(true)\" btn-radio=\"ON\">ON</label>            \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("/templates/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/carousel/carousel.html",
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

angular.module("/templates/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/templates/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': leaving || (active && !entering),\n" +
    "    'prev': (next || active) && direction=='prev',\n" +
    "    'next': (next || active) && direction=='next',\n" +
    "    'right': direction=='prev',\n" +
    "    'left': direction=='next'\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>");
}]);

angular.module("../app/templates/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/modal/backdrop.html",
    "<div class=\"modal-backdrop fade {{ backdropClass }}\"\n" +
    "    ng-class=\"{in: animate}\"\n" +
    "    ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\">\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/templates/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/modal/window.html",
    "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
    "    <div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\">\n" +
    "        <div class=\"modal-content\" modal-transclude></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/templates/tabs/attTab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/tabs/attTab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "    <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("../app/templates/tabs/attTabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/tabs/attTabset.html",
    "<div class=\"att-tabs\">\n" +
    "    <div class=\"tab-content\">\n" +
    "        <div class=\"tab-pane\"\n" +
    "             ng-repeat=\"tab in tabs\"\n" +
    "             ng-class=\"{active: tab.active}\"\n" +
    "             tab-content-transclude=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"nav\" ng-class=\"{'nav-stacked': vertical}\" ng-transclude></ul>\n" +
    "    <span id=\"justify\"></span> <!-- Important for alignment - do not remove -->\n" +
    "</div>");
}]);
