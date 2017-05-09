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
            controller: function($scope, postDataRsv, SetService, CommentService){
                $scope.posts = SetService.configurePostData(postDataRsv);
                console.log('main.home');

                CommentService.setVisibility(false);
            },
            resolve:{
                // $http returns a promise for the url data
                postDataRsv: function($templateRequest, Config, SetService){
                    console.log('home Request: ' + Config.post_url);
                    return SetService.getData(Config.post_url);
                }
            }
        })

        // post individual page
        .state('main.home.post', {
            url:'post/:id',
            views:{
                '@main':{
                    templateUrl:'app/header/banner/route/main.page/postPage.html',
                    controller: function($scope, $stateParams, CommentService){
                        $scope.postId = $stateParams.id;
                        console.log('main.home.post');

                        CommentService.setVisibility(true);
                        console.log(CommentService.is_visible());
                    }
                }
            }
        })

        .state('main.news', {
            url:'news/',
            templateUrl: 'app/header/banner/route/news.page/newsMainPage.html',
            controller: function($scope, newsDataRsv, SetService, CommentService){
                $scope.news_items = SetService.configureNewsData(newsDataRsv);
                console.log('main.news');
                CommentService.setVisibility(false);
            },
            resolve:{   // $http returns a promise for the url data
                newsDataRsv: function($templateRequest, Config, SetService){
                    console.log('news Request: ' + Config.news_url);
                    return SetService.getData(Config.news_url);
                }
            }
        })

        .state('main.news.id', {
            url:':id',
            views: {
                '@main':{
                    templateUrl: 'app/header/banner/route/news.page/newsPage.html',
                    controller: function($scope, CommentService){
                        console.log('main.news.id');
                        CommentService.setVisibility(true);
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

