var app = angular.module('appModule');

app.controller('CommentController', ['$scope', function($scope){
    $scope.inner_comment_css = {'padding-top':'10px',
                                'padding-bottom':'10px',
                                'padding-left':'15px',
                                'padding-right':'15px',
                                'background': '#d0e9c6'};

    $scope.comment_border_css ={'border-style': 'solid',
                                'border-width': '1px'
                                }

    $scope.comment1 = {id:'123', author:'Said Nuri UYANIK', title: 'düşüncelerim', comment:'elinize sağlık', like:'24', dislike:'2', date:'22/03/2017'};
    $scope.comment2 = {id:'125', author:'Ahmet', title: 'anlamadım',comment:'tam olarak nasıl çalışıyor?', like:'12', dislike:'4', date:'31/03/2017'};
}]);