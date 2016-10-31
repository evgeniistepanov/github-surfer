angular.module('gitExplorer').
service('searchService', ['$http', '$window', function ($http, $window) {
    var searchService = this;
    console.log('init search service');

    searchService.getUser = function (user) {
        return $http.get('https://api.github.com/users/' + user)
            .error(function (error) {
                $window.alert(error.message);
                console.log(error);
            });
    }
}]);
