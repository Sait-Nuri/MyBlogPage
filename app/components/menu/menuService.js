var app = angular.module('myApp');

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            template: '<h1>DEFAULT<h1>',
            controller: 'app/components/menu/menuController.js'
        })
        .when('/app_sec', {
            templateUrl: 'app/components/menu/route/appsec.html',
            controller: 'app/components/menu/menuController.js'
        })
        .when('/net_sec', {
            templateUrl: 'app/components/menu/route/netsec.html',
            controller: 'app/components/menu/menuController.js'
        })
        .when('/web_sec', {
            templateUrl: 'app/components/menu/route/websec.html',
            controller: 'app/components/menu/menuController.js'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);
