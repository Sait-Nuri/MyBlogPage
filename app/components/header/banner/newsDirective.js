var app = angular.module('appModule');

app.directive('news', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/header/banner/partials/news_item.html';
    directive.css = 'app/components/header/banner/partials/news_item.css';

    directive.scope = {
        news : '='
    }

    return directive;
});
