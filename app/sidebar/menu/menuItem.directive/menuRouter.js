var app = angular.module('appModule');

app.provider('menustate', function ($stateProvider) {
    var menuUrl;

    this.$get = function ($http) {

        var menuStates = {};
        var templatePath = 'app/sidebar/menu/partials/';
        var statePath = 'main';

        return{
            setUpStates: function () {
                $http({
                    method: 'GET',
                    url: menuUrl
                }).then(function successCallback(response) {
                    menuStates = response.data;
                    var states = response.data.states;

                    for (var i = 0; i < states.length; i++) {
                        var state = states[i];
                        state.config.templateUrl = templatePath+state.config.templateUrl;
                        state.name = statePath+'.'+state.name;

                        $stateProvider.state(state.name, state.config);
                    }

                }, function errorCallback(response) {
                    //console.log(response);
                });
            },

            getStates: function () {
                return menuStates;
            },

            getMainStatePath: function () {
                return statePath;
            },

            getTemplatePath : function () {
                return templatePath;
            }
        };
    };

    this.setMenuUrl = function (url) {
        menuUrl = url;
    }
});

app.run(['menustate', function(menustate) {
    console.log('run block');
    menustate.setUpStates();
}]);

app.config(['$stateProvider', 'menustateProvider', function($stateProvider, menustateProvider){

    menustateProvider.setMenuUrl('app/sidebar/menu/menuItem.directive/menulist.json');

    /*
    $stateProvider
        .state('main.app_sec', {
            url: 'security/app_sec',
            templateUrl: 'app/sidebar/menu/partials/app_sec.html',
            controller: function($scope){
                console.log('app_sec');
            }
        })
        .state('main.net_sec', {
            url: 'security/net_sec',
            templateUrl: 'app/sidebar/menu/partials/net_sec.html',
            controller: function($scope){
                console.log('net_sec');
            }
        })
        .state('main.web_sec', {
            url: 'security/web_sec',
            templateUrl: 'app/sidebar/menu/partials/web_sec.html',
            controller: function($scope){
                console.log('web_sec');
            }
        });
        */
}]);
