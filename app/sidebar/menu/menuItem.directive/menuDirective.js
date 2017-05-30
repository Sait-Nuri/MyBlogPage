var app = angular.module('appModule');

app.directive('menuItem', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'sidebar/menu/menuItem.directive/menu_item.html';
    directive.css = 'sidebar/menu/menuItem.directive/menu_item.css';

    directive.scope = {
        item : '='
    };

    return directive;
});

