(function () {
    'use strict';

    angular.module('myApp', [
        'oc.lazyLoad',
        'ui.router',
        'myApp.home',
        'myApp.numbers'
    ])
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $stateProvider.state('app', {
                url: '',
                abstract:true,
                views: {
                    "main": {
                        controller: 'AppCtrl as appCtrl',
                        templateUrl: 'app.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('app.controller.js');
                    }]
                }
            });
            $urlRouterProvider.otherwise('/home');
        }]);
})();

