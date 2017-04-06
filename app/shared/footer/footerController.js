var app = angular.module('myApp');

app.controller('FooterController', ['$scope', 'styleService', function($scope, styleService){
    $scope.createBorder = styleService.createBorder;


}]);