var app = angular.module('appModule');

app.directive('post', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/header/banner/partials/post_item.html';
    directive.css = 'app/components/header/banner/partials/post_item.css';

    directive.scope = {
        post : '='
    }

    return directive;
});