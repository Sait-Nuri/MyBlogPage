var app = angular.module('myApp');

app.controller('IconController', ['$scope', 'styleService', function($scope, styleService){
    $scope.motto = "Security Matters!";
    $scope.createBorder = styleService.createBorder;

    $scope.icon_image_css = {'height' : '75%', 'background' : '#EBEBEB', 'box-shadow':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
    $scope.icon_motto_css = {'height' : '15%', 'background' : '#E3ECFF'};
    $scope.icon_social_css = {'height': '10%', 'background': '#91A7FF'};
}]);