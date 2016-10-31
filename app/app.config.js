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
        url: '/repo-details/{name}',
        template: '<repo-details></repo-details>'
    };

    var testState = {
        name: 'test',
        url: '/test',
        template: '<test-component></test-component>'
    };

    $stateProvider.state(searchState);
    $stateProvider.state(mainState);
    $stateProvider.state(repoListState);
    $stateProvider.state(repoDetailsState);
    $stateProvider.state(testState);

});