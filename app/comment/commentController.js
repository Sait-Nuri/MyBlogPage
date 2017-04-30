var app = angular.module('appModule');

app.controller('CommentController', ['$scope', function($scope){
    $scope.comment1 = { id:'123',
                        author:'Said Nuri UYANIK',
                        title: 'düşüncelerim',
                        comment:'elinize sağlık',
                        like:'24',
                        dislike:'2',
                        date:'22/03/2017'};

    $scope.comment2 = { id:'125',
                        author:'Ahmet',
                        title: 'anlamadım',
                        comment:'tam olarak nasıl çalışıyor?',
                        like:'12',
                        dislike:'4',
                        date:'31/03/2017'};
}]);