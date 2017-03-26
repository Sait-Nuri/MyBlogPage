var app = angular.module('myApp');

app.directive('comment', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/comment/commentDirective.js';

    directive.scope = {
        id : '@',
        name : '@'
    }
});

app.directive('reply', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/comment/replyDirective.js';

    directive.scope = {
        id : '@',
        name : '@'
    }
});