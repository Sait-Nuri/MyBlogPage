var app = angular.module('myApp');


app.directive('reply', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/comment/replyDirective.js';
});