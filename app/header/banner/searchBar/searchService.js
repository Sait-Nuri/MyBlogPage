var app = angular.module('appModule');

app.service('SearchService', function($http, $state, $timeout){

    this.requestSearch = function (value) {
        var _url = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo";

        console.log('value: ' + value);
        $state.go('main.search_loading');

        //3 seconds delay
        $timeout( function(){
            $state.go('main.search_loaded');
        }, 3000 );
        /*
        return $http({method: 'GET', url: _url})
            .then (function (data) {
                return data;
            });
        */
    }
});


