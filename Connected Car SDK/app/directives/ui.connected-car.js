angular.module('ui.connected-car', ["ui.connected-car.tpls", "ui.connected-car.loader-module"]);
angular.module("ui.connected-car.tpls", ["template/loader.html"]);

// Loader

angular.module('ui.connected-car.loader-module', []).directive('loader', ['$http', function ($http) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'template/loader.html',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    elm.show();
                    console.log("loader showed");
                } else {
                    elm.hide();
                }
            });
        }
    };
}])

angular.module("template/loader.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/loader.html",
      "<div style='margin:100px;position:absolute;'>SEJO BOY</div>");
}]);

// End Loader

// Toogle switch

angular.module('ui.connected-car.loader-module', []).directive('toogleSwitch', [function () {
    return {
        restrict: 'A',
        templateUrl: 'template/toogleSwitch.html',
        scope: {
            attCustomModel: '='
        },
        link: function (scope, elm, attrs) {
        }
    };
}])

angular.module("template/toogleSwitch.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/toogleSwitch.html",
      '<div class="att-toggle-switch" ng-controller="">' +
      '<div class="btn-group">' +
      '<label class="btn btn-primary" ng-model="attCustomModel" btn-radio="OFF">OFF</label>' +
      '<label class="btn btn-primary" ng-model="attCustomModel" btn-radio="ON">ON</label>' +
      '</div></div>');
}]);

// End Toogle switch