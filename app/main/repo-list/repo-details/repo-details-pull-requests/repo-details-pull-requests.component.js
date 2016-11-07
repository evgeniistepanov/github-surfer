angular.module('gitExplorer').component('repoDetailsPullRequests', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details-pull-requests/repo-details-pull-requests.template.html',
    controller: function RepoDetailsPullRequestsController($stateParams, repoDetailsService) {
        var repoDetailsPullRequestsController = this;
        repoDetailsPullRequestsController.pullRequests = [];

        console.log('repoDetailsPullRequestsController init');

        repoDetailsService.getRepoPullRequests($stateParams.name).then(function (response) {
            repoDetailsPullRequestsController.pullRequests = response.data;
        });
    }
});