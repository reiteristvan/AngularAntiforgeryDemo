
(function() {
    'use strict';

    function antiForgeryDirectiveController(appService) {
        var directive = this;

        directive.antiForgeryToken = '';

        directive.activate = function () {
            appService.getAntiForgeryToken().then(function(data) {
                directive.antiForgeryToken = data.antiForgeryToken;;
            });
        };

        directive.activate();
    }

    function antiForgeryTokenDirective() {
        return {
            controllerAs: 'directive',
            template: '<input type="hidden" id="__antiForgeryToken" name="antiForgeryToken" value={{directive.antiForgeryToken}}>',
            controller: [ 'appService', antiForgeryDirectiveController ]
        }
    }

    angular.module('demoApp').directive('antiforgerytoken', antiForgeryTokenDirective);
})();