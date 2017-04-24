var app = angular.module('appModule');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('app_sec', {
            url: '/security/app_sec',
            templateUrl: 'app/components/menu/route/appsec.html',
            controller: function($scope, SetService){
                console.log('app_sec');
            }
        })
        .state('net_sec', {
            url: '/security/net_sec',
            templateUrl: 'app/components/menu/route/netsec.html',
            controller: function($scope, SetService){
                console.log('net_sec');
            }
        })
        .state('web_sec', {
            url: '/security/web_sec',
            templateUrl: 'app/components/menu/route/websec.html',
            controller: function($scope, SetService){
                console.log('web_sec');
            }
        });
}]);
