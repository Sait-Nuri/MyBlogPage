var app = angular.module('appModule');

app.controller('CommentController', ['$scope', '$stateParams', '$state', '$timeout', 'CommentService',
                            function($scope, $stateParams, $state, $timeout, CommentService){

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

    $scope.data={};
    $scope.alert_visible = false;
    $scope.spinner_visible = false;
    $scope.comment_message = "Yorumunuz gönderildi.";

    $scope.sendComment = function () {
        var commentObj = {
            subject: $scope.data.subject,
            text: $scope.data.commentText,
            id: $stateParams.id
        };

        $scope.spinner_visible = true;
        CommentService.setVisibility(false);

        //$state.go('main.search_loading');
        $timeout( function(){
            $scope.spinner_visible = false;
            $scope.alert_visible = true;
        }, 3000 );

        $timeout( function(){
            $scope.alert_visible = false;
        }, 4000 );

        clearComments();
        console.log(commentObj);
    };

    var clearComments = function () {
        $scope.data={};
    }
}]);