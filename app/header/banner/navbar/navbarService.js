var app = angular.module('appModule');

app.service('SetService', function($http, $location, Config){

    // configure incoming post data from webservice
    this.configurePostData = function(posts) {
        console.log('configurePostData');

        return posts;
    };

    // configure incoming news data from webservice
    this.configureNewsData = function(newsData) {
        console.log('configureNewsData');

        return newsData;
    };

    // retrieve data from webservice
    this.getData = function(_url){
        return $http({method: 'GET', url: _url});
    };
});