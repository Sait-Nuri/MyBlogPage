var app = angular.module('appModule');

app.directive('menuItem', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'app/components/menu/menu_item.html';
    directive.css = 'app/components/menu/menu_item.css';

    directive.scope = {
        item : '='
    }

    return directive;
});

