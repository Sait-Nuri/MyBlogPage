var app = angular.module('myApp');

app.factory('styleService', function () {

    var borderFun = function(){
        return {'height':'100%',
                'border':'1px solid rgba(0,0,0,.125)',
                'border-radius':'.25rem'}
    }

    return {
        createBorder:borderFun
    };
});