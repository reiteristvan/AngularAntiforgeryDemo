
(function() {
    'use strict';

    function homeController(appService) {
        var vm = this;

        vm.email = '';
        vm.password = '';

        vm.submit = function () {
            console.log('submit');
            appService.login(vm.email, vm.password).then(function(data) {
                // success :)
            });
        };
    }

    angular.module('demoApp').controller('homeController', homeController);
})();