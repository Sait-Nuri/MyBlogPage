var app = angular.module('appModule');

app.provider('menustate', function ($stateProvider) {
    var menuUrl;

    this.$get = function ($http, $rootScope) {

        var menuStates = {};
        var statePath = 'main';

        return{
            setUpStates: function () {
                $http({
                    method: 'GET',
                    url: menuUrl
                }).then(function successCallback(response) { //get sidebar states as json
                    $rootScope.menu_loading = false;
                    menuStates = response.data;

                    // for each menu item
                    for (var i = 0; i < menuStates.length; i++){
                        var states = menuStates[i].states;

                        // Configure each state
                        for (var j = 0; j < states.length; j++) {
                            var state = states[j];
                            state.name = statePath+'.'+state.name;
                            $stateProvider.state(state.name, state.config);
                        }
                    }

                }, function errorCallback(response) {
                    //console.log(response);
                });
            },

            // Return all menu items
            getStates: function () {
                return menuStates;
            }
        };
    };

    // Set the url link which contains sidebar menu items on server side
    this.setMenuUrl = function (url) {
        menuUrl = url;
    }
});

app.config(['$stateProvider', 'menustateProvider', function($stateProvider, menustateProvider){

    // This should be real server url
    menustateProvider.setMenuUrl('app/sidebar/menu/menuItem.directive/menulist.json');
}]);


app.run(['menustate', '$rootScope', function(menustate, $rootScope) {
    console.log('run block');
    $rootScope.menu_loading = true;
    menustate.setUpStates();
}]);
