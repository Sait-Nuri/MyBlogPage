var app = angular.module('myApp');

app.directive('comment', function () {
    var directive = {};
    directive.restrict = 'AE';
    directive.templateUrl = 'app/components/comment/partials/comments_module.html';

    directive.scope = {
        info : '='
    }

    return directive;
});

