angular.module('gitExplorer').component('search', {
    templateUrl: 'app/search/search.template.html',
    controller: function SearchController(settings, searchService, $state) {
        var searchController = this;
        searchController.searchInput = '';

        searchController.submit = function () {
            if (searchController.searchInput === '') {
                return
            }

            settings.user = searchController.searchInput;
            searchService.getUser(settings.user).then(function () {
                $state.go('main.repo-list');
            })
        }
    }
});