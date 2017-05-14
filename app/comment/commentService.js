var app = angular.module('appModule');

app.service('CommentService', function($rootScope){

    this.is_visible = function() {
        return $rootScope.comment_visible;
    };

    this.setVisibility = function(bool){
        $rootScope.comment_visible = bool;
        return bool;
    };
});