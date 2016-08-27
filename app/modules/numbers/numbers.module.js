(function() {
    'use strict';    
    angular.module( 'myApp.numbers', [
        'ui.router',
        'ui.bootstrap',
        'myApp.service.numberGenerator'
    ])
    .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('numbers', {
                url: '/number-generator',
                parent:'app',
                views: {
                    "": {
                        controller: 'NumberCtrl as numberCtrl',
                        templateUrl: 'modules/numbers/numbers.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('modules/numbers/numbers.controller.js');
                    }]
                },
                data: {pageTitle: 'Numbers'}
            });
        }]);

})();
