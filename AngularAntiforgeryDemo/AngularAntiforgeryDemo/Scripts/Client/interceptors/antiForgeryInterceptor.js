
(function() {
    'use strict';

    function antiForgeryInterceptor() {
        return {
            request: function($config) {
                var antiForgeryTokenField = document.getElementById('__antiForgeryToken');
                if (antiForgeryTokenField) {
                    var xsrfToken = antiForgeryTokenField.value;
                    $config.headers['XSRF-TOKEN'] = xsrfToken;
                }

                return $config;
            }
        };
    }

    angular.module('demoApp').service('antiForgeryInterceptor', antiForgeryInterceptor);
})();