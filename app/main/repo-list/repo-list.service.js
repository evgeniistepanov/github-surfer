angular.module('gitExplorer').service('repoListService', ['$http', 'settings', function($http, settings) {
    var repoListService = this;
    repoListService.repos = [
        {
            name: 'Test Repo 1',
            url: 'http://google.com'
        },
        {
            name: 'Test Repo 2',
            url: 'http://google.com'
        },
        {
            name: 'Test Repo 3',
            url: 'http://google.com'
        }
    ];

    repoListService.getAllRepos = function () {
        return $http.get('https://api.github.com/users/' + settings.user + '/repos');
    }

}]);
