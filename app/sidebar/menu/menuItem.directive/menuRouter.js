var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('main.app_sec', {
            url: 'security/app_sec',
            templateUrl: 'app/sidebar/menu/partials/appsec.html',
            controller: function($scope){
                console.log('app_sec');
            }
        })
        .state('main.net_sec', {
            url: 'security/net_sec',
            templateUrl: 'app/sidebar/menu/partials/netsec.html',
            controller: function($scope){
                console.log('net_sec');
            }
        })
        .state('main.web_sec', {
            url: 'security/web_sec',
            templateUrl: 'app/sidebar/menu/partials/websec.html',
            controller: function($scope){
                console.log('web_sec');
            }
        });
}]);
