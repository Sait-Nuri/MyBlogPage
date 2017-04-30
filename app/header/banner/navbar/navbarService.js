var app = angular.module('appModule');

app.service('SetService', function($http, $location, Config){

    // configure incoming post data from webservice
    this.configurePostData = function(items) {
        console.log('configurePostData');

        var posts = [
            {header: 'Angular security flaw', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', id: '1'},
            {header: 'CISCO IOS security flaw', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', id: '2'},
            {header: 'Android backdoor detected', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , numread:'5', id: '3'},
            {header: 'Windows 10 zero day exploit', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5', id: '4'}
        ];

        return posts;
    };

    // configure incoming news data from webservice
    this.configureNewsData = function(items) {
        console.log('configureNewsData');

       var news_items = [
            {header: 'Referandum sonuçları belli oldu', id: '1'},
            {header: '2 terörist etkisiz hale getirildi', id: '2'}
        ];

        return news_items;
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