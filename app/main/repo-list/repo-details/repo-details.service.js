angular.module('gitExplorer').service('repoDetailsService', ['$http', 'settings', function ($http, settings) {
    var repoDetailsService = this;

    repoDetailsService.getRepoDetail = function (name) {
        return $http.get(settings.githubUrl + 'repos/' + settings.user + '/' + name);
    };

    repoDetailsService.getRepoIssues = function (name) {
        return $http.get(settings.githubUrl + 'repos/' + settings.user + '/' + name + '/issues');
    };

    repoDetailsService.getRepoBranches = function (name) {
        return $http.get(settings.githubUrl + 'repos/' + settings.user + '/' + name + '/branches');
    };

    repoDetailsService.getRepoPullRequests = function (name) {
        return $http.get(settings.githubUrl + 'repos/' + settings.user + '/' + name + '/pulls');
    };

}]);
