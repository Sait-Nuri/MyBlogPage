var app = angular.module('myApp');

app.controller('CommentController', ['$scope', 'styleService', function($scope, styleService){
    $scope.createBorder = styleService.createBorder;
    $scope.inner_comment_css = {'padding-top':'10px',
                                'padding-bottom':'10px',
                                'padding-left':'15px',
                                'padding-right':'15px',
                                'background': '#d0e9c6'};

    $scope.comment_border_css ={'border-style': 'solid',
                                'border-width': '1px'
                                }


}]);