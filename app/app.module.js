var app = angular.module('appModule', [ 'ngAnimate',
                                        'ngSanitize',
                                        'ui.bootstrap',
                                        'angularCSS',
                                        'ui.router',
                                        'uiRouterStyles',
                                        '720kb.socialshare',
                                        'xeditable']);

app.constant('Config', {
    post_url : '/post',
    news_url : 'header/banner/route/news.page/newsData.json',
    get_all_pages: '/'
});

app.run(function($rootScope) {
    $rootScope.comment_visible = false;
});