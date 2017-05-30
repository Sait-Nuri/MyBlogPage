var app = angular.module('appModule', [ 'ngAnimate',
                                        'ngSanitize',
                                        'ui.bootstrap',
                                        'angularCSS',
                                        'ui.router',
                                        'uiRouterStyles',
                                        '720kb.socialshare',
                                        'xeditable']);

app.constant('Config', {
    post_url : 'header/banner/route/main.page/postData.json',
    news_url : 'header/banner/route/news.page/newsData.json'
});

app.run(function($rootScope) {
    $rootScope.comment_visible = false;
})