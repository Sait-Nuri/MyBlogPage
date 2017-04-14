var app = angular.module('appModule');

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/header/banner/route/mainPage.html',
            controller: 'ContentController'
        })
        .when('/news', {
            templateUrl: 'app/components/header/banner/route/newsPage.html',
            controller: 'ContentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
