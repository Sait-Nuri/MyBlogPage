var app = angular.module('appModule');

app.directive('news', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'header/banner/route/news.page/news_item.html';
    directive.css = 'header/banner/route/news.page/news_item.css';

    directive.scope = {
        news : '='
    }

    return directive;
});
