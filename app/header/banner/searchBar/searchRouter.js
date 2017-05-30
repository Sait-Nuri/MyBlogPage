var app = angular.module('appModule');

app.config(['$stateProvider', function($stateProvider){

    $stateProvider

        .state('main.search_loading', {
            url:'search/',
            templateUrl: 'app.common/loadingPartial.html',
            controller: 'SearchController'
        })

        .state('main.search_loaded', {
            url: 'search/',
            templateUrl: 'header/banner/searchBar/searchTemplate.html',
            controller: 'SearchController'
        })


}]);