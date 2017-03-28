var app = angular.module('myApp');

app.directive('comment', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/comment/partials/comments_module.html';
    directive.css = 'app/components/comment/commentStyle.css';

    directive.scope = {
        info : '='
    }

    return directive;
});

