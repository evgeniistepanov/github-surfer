angular.module('gitExplorer').component('repoDetails', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details.template.html',
    controller: function RepoDetailsController($stateParams, repoDetailsService) {
        var repoDetailsController = this;
        repoDetailsController.repoDetails = {};
        repoDetailsService.getRepoDetail($stateParams.name).then(function (response) {
            repoDetailsController.repoDetails = response.data;
        });

    }
});