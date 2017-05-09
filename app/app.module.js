var app = angular.module('appModule', [ 'ngAnimate',
                                        'ngSanitize',
                                        'ui.bootstrap',
                                        'angularCSS',
                                        'ui.router',
                                        'uiRouterStyles',
                                        '720kb.socialshare']);

app.constant('Config', {
    post_url : 'http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo',
    news_url : 'http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo'
});

app.run(function($rootScope) {
    $rootScope.comment_visible = false;
})