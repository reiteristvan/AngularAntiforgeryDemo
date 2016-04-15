
(function() {
    'use strict';

    var appService = function(apiUrl, $http, $q) {
        this.getAntiForgeryToken = function() {
            var deferred = $q.defer();

            $http.get(apiUrl + 'security/antiforgerytoken').success(function(data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        this.login = function(email, password) {
            var deferred = $q.defer();

            var loginModel = {
                email: email,
                password: password
            };

            $http.post(apiUrl + 'security/login', loginModel).success(function(data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };
    };

    angular.module('demoApp').provider('appService', [ 'apiUrl', function(apiUrl) {
            return {
                $get: [ '$http', '$q', function($http, $q) {
                        return new appService(apiUrl, $http, $q);
                    }]
            }
        }]);
})();