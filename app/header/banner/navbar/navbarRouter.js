var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home/');

    $stateProvider

        // Home page with partials
        .state('main', {
            url: '/',
            views:{
                'profile':{
                    templateUrl: 'app/header/profile/profileTemplate.html',
                    controller:'ProfileController'
                },
                'banner':{
                    templateUrl: 'app/header/banner/bannerTemplate.html',
                    controller: 'BannerController'
                },
                'sidebar':{
                    templateUrl: 'app/sidebar/sidebarTemplate.html',
                    controller: 'SidebarController'
                },
                'comment':{
                    templateUrl: 'app/comment/commentTemplate.html',
                    controller: 'CommentController'
                },
                'footer':{
                    templateUrl: 'app/footer/footerTemplate.html',
                    controller: 'FooterController'
                },
                'content':{
                    templateUrl: 'app/content/contentTemplate.html',
                    controller: function(){
                        console.log('content@main');
                    }
                }
            }
        })

        //home sayfasında iken postlar gözükecek
        .state('main.home', {
            url:'home/',
            templateUrl: 'app/header/banner/route/main.page/mainPage.html',
            controller: function($scope, SetService, CommentService, $http, Config, ContentService){
                ContentService.setLoadingSpinner(true);
                console.log('main.home');

                $http({method: 'GET', url: Config.post_url})
                    .then(function(response) {
                        console.log(response.data);
                        $scope.posts = SetService.configurePostData(response.data);
                        ContentService.setLoadingSpinner(false);
                    });

                CommentService.setVisibility(false);
            }
        })

        // post individual page
        .state('main.home.post', {
            url:'post/:id',
            views:{
                '@main':{
                    templateProvider: function ($stateParams, $http, ContentService) {
                        var post_id = $stateParams.id;
                        var url = 'serverhost/page/' + post_id;
                        console.log('get: ' + url);

                        ContentService.setLoadingSpinner(true);

                        return $http({method: 'GET', url: 'app/header/banner/route/main.page/postPage.html'})
                            .then(function(response) {
                                //console.log(response.data);
                                ContentService.setLoadingSpinner(false);
                                return response.data;
                            });
                    },
                    controller: function($scope, $stateParams, CommentService){

                        $scope.postId = $stateParams.id;
                        //console.log('main.home.post');
                        CommentService.setVisibility(true);
                    }
                }
            }
        })

        .state('main.news', {
            url:'news/',
            templateUrl: 'app/header/banner/route/news.page/newsMainPage.html',
            controller: function($scope, SetService, CommentService, $http, Config, ContentService){
                ContentService.setLoadingSpinner(true);

                $http({method: 'GET', url: Config.news_url})
                    .then(function(response) {
                        $scope.news_items = SetService.configureNewsData(response.data);
                        ContentService.setLoadingSpinner(false);
                    });

                console.log('main.news');
                CommentService.setVisibility(false);
            }
        })

        .state('main.news.id', {
            url:':id',
            views: {
                '@main':{
                    templateProvider: function ($stateParams, $http, ContentService) {
                        var news_id = $stateParams.id;
                        ContentService.setLoadingSpinner(true);

                        return $http({method: 'GET', url: 'app/header/banner/route/news.page/newsPage.html'})
                            .then(function(response) {
                                console.log(response.data);
                                return response.data;
                            });
                    },
                    controller: function($scope, CommentService, ContentService){
                        console.log('main.news.id');
                        CommentService.setVisibility(true);
                        ContentService.setLoadingSpinner(false);
                    }
                }
            }
        })

        .state('main.contact', {
            url:'contact',
            templateUrl: 'app/header/banner/route/contact/contact.html',
            controller: function(){
                console.log('main.contact');
            },
            data: {
                css: [
                    'app/header/banner/route/contact/contact.css'
                ]
            }
        })

        .state('main.about', {
            url:'about',
            templateUrl: 'app/header/banner/route/about/aboutUs.html',
            controller: function(){
                console.log('main.about');
            },
            data: {
                css: [
                    'app/header/banner/route/about/aboutUs.css'
                ]
            }
        })
}]);

