angular.module('gitExplorer').component('repoDetailsIssues', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details-issues/repo-details-issues.template.html',
    controller: function RepoDetailsIssuesController($stateParams, repoDetailsService) {
        var repoDetailsIssuesController = this;
        repoDetailsIssuesController.issues = [];

        repoDetailsService.getRepoIssues($stateParams.name).then(function (response) {
            repoDetailsIssuesController.issues = response.data;
        });
    }
});