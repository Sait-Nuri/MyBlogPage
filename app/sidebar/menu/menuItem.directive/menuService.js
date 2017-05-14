var app = angular.module('appModule');

app.service('MenuService', ['$scope', function($rootScope){
    $rootScope.menu_loading = true;

    this.setMenuLoading = function (status) {
        $rootScope.menu_loading = status;
    }
}]);
