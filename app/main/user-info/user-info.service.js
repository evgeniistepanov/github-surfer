angular.module('gitExplorer')
    .service('userInfoService', ['$http', 'settings', function ($http, settings) {
        var userInfoService = this;
        userInfoService.userInfo = {};

        userInfoService.getUser = function (user) {
            return $http.get('https://api.github.com/users/' + user);
        };

        userInfoService.getUserFollowers = function (user) {
            return $http.get('https://api.github.com/users/' + user + '/followers');
        };

}]);
