var app = angular.module('appModule');

app.controller('ContentController', ['$scope', function($scope){

    $scope.inner_content_css = {'height': '100%',
                                'padding-top':'20px',
                                'padding-bottom':'20px',
                                'padding-left':'15px',
                                'padding-right':'15px'};

    $scope.posts = [
        {header: 'Angular security flaw', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'},
        {header: 'CISCO IOS security flaw', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'},
        {header: 'Android backdoor detected', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , numread:'5'},
        {header: 'Windows 10 zero day exploit', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'}
    ];

    $scope.news_items = [
        {header: 'Referandum sonuçları belli oldu'},
        {header: '2 terörist etkisiz hale getirildi'}
    ];
}]);