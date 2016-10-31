angular.module('gitExplorer').component('repoList', {
    templateUrl: 'app/main/repo-list/repo-list.template.html',
    controller: function RepoListController(settings, repoListService, $state) {
        var repoListCtrl = this;
        repoListCtrl.repos = repoListService.repos;
        
        repoListService.getAllRepos().then(function (response) {
            repoListCtrl.repos = response.data;
        });

        repoListCtrl.goToDetails = function (repo) {
            console.log(repo);
            $state.go('main.repo-details', {name: repo.name});
            /*$state.go('main.repo-details');
            */
        }
    }
});