angular.module('gitExplorer').component('repoDetailsBranches', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details-branches/repo-details-branches.template.html',
    controller: function RepoDetailsBranchesController($stateParams, repoDetailsService) {
        var repoDetailsBranchesController = this;
        repoDetailsBranchesController.branches = [];
        
        repoDetailsService.getRepoBranches($stateParams.name).then(function (response) {
            repoDetailsBranchesController.branches = response.data;
        });
    }
});