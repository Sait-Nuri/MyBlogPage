var app = angular.module('appModule');

app.controller('BannerController', ['$scope', 'SearchService', function($scope){
    $scope.title= "Welcome to My Security Blog";
}]);
