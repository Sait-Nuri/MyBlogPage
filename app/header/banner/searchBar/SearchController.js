var app = angular.module('appModule');

app.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService){
    $scope.title= "Welcome to My Security Blog";
    $scope.data={};

    $scope.search = function(){
        var value = $scope.data.search_value; //get input value

        SearchService.requestSearch(value); // start remote search query
    }
}]);
