angular.module('gitExplorer').
value('settings', {
    githubUrl: 'https://api.github.com/',
    user: ''
}).
config(function($stateProvider) {
    var searchState = {
        name: 'search',
        url: '/',
        template: '<search></search>'
    };

    var mainState = {
        name: 'main',
        url: '',
        abstract: true,
        template: '<main></main>'
    };

    var repoListState = {
        name: 'main.repo-list',
        url: '/repo-list',
        template: '<repo-list></repo-list>'
    };

    var repoDetailsState = {
        name: 'main.repo-details',
        url: '/repo-details/:name',
        template: '<repo-details></repo-details>'
    };

    var repoDetailsMainViewState = {
        name: 'main.repo-details.index',
        url: '/index',
        template: '<repo-details-index></repo-details-index>'
    };

    var repoDetailsIssuesState = {
        name: 'main.repo-details.issues',
        url: '/issues',
        template: '<repo-details-issues></repo-details-issues>'
    };

    var repoDetailsBranchesState = {
        name: 'main.repo-details.branches',
        url: '/branches',
        template: '<repo-details-branches></repo-details-branches>'
    };

    var repoDetailsPullRequestsState = {
        name: 'main.repo-details.pull-requests',
        url: '/pull-requests',
        template: '<repo-details-pull-requests></repo-details-pull-requests>'
    };

    var userInfoState = {
        name: 'main.user-info',
        url: '/user-info',
        template: '<user-info></user-info>'
    };

    var userInfoIndexState = {
        name: 'main.user-info.index',
        url: '/index',
        template: '<user-info-index></user-info-index>'
    };

    var userInfoFollowersState = {
        name: 'main.user-info.followers',
        url: '/followers',
        template: '<user-info-followers></user-info-followers>'
    };

    var testState = {
        name: 'test',
        url: '/test',
        template: '<test-component></test-component>'
    };

    $stateProvider.state(searchState);
    $stateProvider.state(mainState);
    $stateProvider.state(testState);

    $stateProvider.state(repoListState);
    $stateProvider.state(repoDetailsState);

    $stateProvider.state(repoDetailsMainViewState);
    $stateProvider.state(repoDetailsIssuesState);
    $stateProvider.state(repoDetailsBranchesState);
    $stateProvider.state(repoDetailsPullRequestsState);
    
    $stateProvider.state(userInfoState);
    $stateProvider.state(userInfoIndexState);
    $stateProvider.state(userInfoFollowersState);
});