var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('app_sec', {
            url: '/app_sec',
            templateUrl: 'app/components/menu/route/appsec.html',
            controller: 'ContentController'
        })
        .state('net_sec', {
            url: '/net_sec',
            templateUrl: 'app/components/menu/route/netsec.html',
            controller: 'ContentController'
        })
        .state('web_sec', {
            url: '/web_sec',
            templateUrl: 'app/components/menu/route/websec.html',
            controller: 'ContentController'
        });
}]);
