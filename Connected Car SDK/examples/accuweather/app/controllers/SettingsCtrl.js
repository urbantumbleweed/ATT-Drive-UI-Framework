var app = angular.module('app');

app.controller('SettingsCtrl', ['$rootScope', '$scope', '$modal',
    function ($rootScope, $scope, $modal) {
        $scope.temperature = "celsius";
        $scope.location = true

        $scope.change = function () {
            var modalInstance = $modal.open({
                templateUrl: 'modalContent.html',
                controller: ModalInstanceCtrl,
                size: 'lg',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

    //$scope.items = items;
    //$scope.selected = {
    //    item: $scope.items[0]
    //};

    //$scope.ok = function () {
    //    $modalInstance.close($scope.selected.item);
    //};

    //$scope.cancel = function () {
    //    $modalInstance.dismiss('cancel');
    //};
};