var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // Home page shows posts
        .state('home', {
            url:'/home',
            templateUrl: 'app/components/header/banner/route/main.page/mainPage.html',

            controller: function($scope, promiseGetData, SetService){
                $scope.posts = SetService.configureData(promiseGetData);
            },

            resolve:{
                promiseGetData: function($templateRequest, Config, $http){ // $http returns a promise for the url data
                    console.log('Request: ' + Config.post_url);

                    return $http({method: 'GET', url: Config.post_url})
                        .then (function (data) {
                            console.log('gelen data: ' + data);
                            return data;
                        });


                    return 'res';
                }
            }
        })

        // news page
        .state('news', {
            url:'/news',
            templateUrl: 'app/components/header/banner/route/news.page/newsPage.html',
            controller: 'ContentController'
        })
}]);

