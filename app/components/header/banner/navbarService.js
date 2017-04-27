var app = angular.module('appModule');

app.service('SetService', function($http, $location, Config){

    // configure incoming post data from webservice
    this.configurePostData = function(items) {
        console.log('in Post configure service');

        var posts = [
            {header: 'Angular security flaw', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', url: $location.absUrl()+'post/1'},
            {header: 'CISCO IOS security flaw', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', url: $location.absUrl()+'post/2'},
            {header: 'Android backdoor detected', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , numread:'5', url: $location.absUrl()+'post/3'},
            {header: 'Windows 10 zero day exploit', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', url: $location.absUrl()+'post/4'}
        ];

        return posts;
    };

    // configure incoming news data from webservice
    this.configureNewsData = function(items) {
        console.log('in News configure service');

       var news = [
            {header: 'Referandum sonuçları belli oldu', url: $location.absUrl()+'/1'},
            {header: '2 terörist etkisiz hale getirildi', url: $location.absUrl()+'/2'}
        ];

        return news;
    };

    // retrieve data from webservice
    this.getData = function(_url){
        return $http({method: 'GET', url: _url})
            .then (function (data) {
                console.log('gelen data: ' + data);
                return data;
            });
    };
});