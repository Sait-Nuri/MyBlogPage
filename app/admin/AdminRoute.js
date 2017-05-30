var app = angular.module('appModule');

app.config(['$stateProvider', function($stateProvider){

    $stateProvider

        .state('main.admin', {
            url:'admin',
            templateUrl: 'admin/adminTemplate.html',
            controller: 'AdminController'
        });
}]);