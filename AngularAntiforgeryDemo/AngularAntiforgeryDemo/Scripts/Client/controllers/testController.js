
(function () {
    'use strict';

    function testController(appService) {
        var vm = this;

        vm.text = 'alma';
    }

    angular.module('demoApp').controller('testController', testController);
})();