var app = angular.module('appModule');

app.directive('comment', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'comment/comment.directive/comments_module.html';
    directive.css = 'comment/comment.directive/commentStyle.css';

    directive.scope = {
        info : '='
    }

    return directive;
});

