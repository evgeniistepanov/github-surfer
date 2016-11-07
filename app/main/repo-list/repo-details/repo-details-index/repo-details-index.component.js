angular.module('gitExplorer').component('repoDetailsIndex', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details-index/repo-details-index.template.html',
    controller: function RepoDetailsIndexController($stateParams, repoDetailsService) {
        var repoDetailsController = this;
        repoDetailsController.repoDetails = {};
        repoDetailsService.getRepoDetail($stateParams.name).then(function (response) {
            repoDetailsController.repoDetails = response.data;
        });

    }
});