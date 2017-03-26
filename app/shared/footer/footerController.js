var app = angular.module('myApp');

app.controller('FooterController', ['$scope', 'styleService', function($scope, styleService){
    $scope.createBorder = styleService.createBorder;

    $scope.inner_footer_css =  {'height': '100%',
                                'padding-top':'20px',
                                'padding-bottom':'20px',
                                'padding-left':'15px',
                                'padding-right':'15px',
                                'background': '#0f0f0f'};
}]);