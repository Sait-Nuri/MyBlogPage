var app = angular.module('appModule');

app.service('SetService', function(){
    this.configureData = function(items) {

        console.log('in configure service');

        var posts = [
            {header: 'Angular security flaw', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'},
            {header: 'CISCO IOS security flaw', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'},
            {header: 'Android backdoor detected', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' , numread:'5'},
            {header: 'Windows 10 zero day exploit', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', numread:'5'}
        ];

        return posts;
    }
});