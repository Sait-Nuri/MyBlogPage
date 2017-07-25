var app = angular.module('appModule');

app.directive('post', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'header/banner/route/main.page/post_item.html';
    directive.css = 'header/banner/route/main.page/post_item.css';

    directive.scope = {
        post : '='
    };

    return directive;
});