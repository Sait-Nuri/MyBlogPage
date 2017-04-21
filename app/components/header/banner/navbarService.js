var app = angular.module('appModule');

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'app/components/header/banner/route/main.page/mainPage.html',
            controller: 'ContentController'
        })
        .when('/news', {
            templateUrl: 'app/components/header/banner/route/news.page/newsPage.html',
            controller: 'ContentController'
        })
}]);
