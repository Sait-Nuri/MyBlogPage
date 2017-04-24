var app = angular.module('appModule');

app.controller('MenuController', ['$scope', function($scope){

    $scope.menu_inside_css = {'background' : '#B3BAFF',
                              'height': '100%'};

    $scope.leftnavbar_css = {'height':'100%'};
    $scope.item1 = {subject: 'Security',
                    isCollapsed: true,
                    sublist:[{route:'app_sec', name:'Application Security'}
                        ,{route:'web_sec', name:'Web Security'}
                        ,{route:'net_sec', name:'Network Security'}]};

}]);

