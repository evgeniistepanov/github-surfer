angular.module('gitExplorer').component('repoDetailsNavbar', {
    templateUrl: 'app/main/repo-list/repo-details/repo-details-navbar/repo-details-navbar.template.html',
    controller: function RepoDetailsNavbarController($state) {
        var repoDetailsNavbarController = this;
        repoDetailsNavbarController.getActiveItem = function (item) {
            if (item === $state.current.url) {
                return 'active';
            } else {
                return '';
            }
        };
    }
});