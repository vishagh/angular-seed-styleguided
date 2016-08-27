(function() {
'use strict';

    angular
        .module('myApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = [];
    function AppCtrl() {
        var vm = this;
        
        activate();

        function activate() { }
    }
})();