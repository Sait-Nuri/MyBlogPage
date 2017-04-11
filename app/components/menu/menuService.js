var app = angular.module('appModule');

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'app/components/menu/route/mainPage.html',
            controller: 'ContentController'
        })
        .when('/app_sec', {
            templateUrl: 'app/components/menu/route/appsec.html',
            controller: 'ContentController'
        })
        .when('/net_sec', {
            templateUrl: 'app/components/menu/route/netsec.html',
            controller: 'ContentController'
        })
        .when('/web_sec', {
            templateUrl: 'app/components/menu/route/websec.html',
            controller: 'ContentController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
