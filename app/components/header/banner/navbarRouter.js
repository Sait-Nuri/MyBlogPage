var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page shows posts
        .state('home', {
            url:'/',
            templateUrl: 'app/components/header/banner/route/main.page/mainPage.html',
            controller: function($scope, postDataRsv, SetService){
                $scope.posts = SetService.configurePostData(postDataRsv);
            },
            resolve:{
                // $http returns a promise for the url data
                postDataRsv: function($templateRequest, Config, SetService){
                    console.log('home Request: ' + Config.post_url);
                    return SetService.getData(Config.post_url);
                }
            }
        })

        .state('post', {
            url: "/post/:id",
            templateUrl:'app/components/header/banner/route/main.page/postPage.html',
            controller: function($scope, $stateParams){
                $scope.postId = $stateParams.id;
            }
        })

        // news page
        .state('news', {
            url:'/news',
            templateUrl: 'app/components/header/banner/route/news.page/newsMainPage.html',
            controller: function($scope, newsDataRsv, SetService){
                $scope.news_items = SetService.configureNewsData(newsDataRsv);
            },
            resolve:{
                // $http returns a promise for the url data
                newsDataRsv: function($templateRequest, Config, SetService){
                    console.log('news Request: ' + Config.news_url);
                    return SetService.getData(Config.news_url);
                }
            }
        })


        // each news
        .state('newpage', {
            url:'/news/:id',
            templateUrl: 'app/components/header/banner/route/news.page/newsPage.html',
            controller: function($scope, $stateParams){
                $scope.newsId = $stateParams.id;
            }
        })


        // Contact page
        .state('contact', {
            url:'/contact',
            templateUrl: 'app/components/header/banner/route/contact/contact.html',
            controller: function($scope, SetService){

            },
            data: {
                css: 'app/components/header/banner/route/contact/contact.css'
            }
        })

        .state('about', {
            url:'/about',
            templateUrl: 'app/components/header/banner/route/about/aboutUs.html',
            controller: function($scope, SetService){

            },
            data: {
                css: 'app/components/header/banner/route/about/aboutUs.css'
            }
        })
}]);

