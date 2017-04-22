var app = angular.module('appModule');

app.controller('ContentController', ['$scope', function($scope){

    $scope.inner_content_css = {'height': '100%',
                                'padding-top':'20px',
                                'padding-bottom':'20px',
                                'padding-left':'15px',
                                'padding-right':'15px'};


    $scope.news_items = [
        {header: 'Referandum sonuçları belli oldu'},
        {header: '2 terörist etkisiz hale getirildi'}
    ];
}]);