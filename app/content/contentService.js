var app = angular.module('appModule');

app.service('ContentService', function ($rootScope) {
    $rootScope.loading_active = true;

    this.setLoadingSpinner = function (status) {
        $rootScope.loading_active = status;
    }
});
