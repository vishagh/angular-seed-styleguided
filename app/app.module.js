(function () {
    'use strict';

    angular.module('myApp', [
        'oc.lazyLoad',
        'ui.router',
        'myApp.home',
        'myApp.numbers'
    ])
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        }]);
})();

