angular.module('gitExplorer').service('repoDetailsService', ['$http', 'settings', function ($http, settings) {
    var repoDetailsService = this;
    var repo = {
        "id": 45122006,
        "name": "addClasses",
        "full_name": "tird/addClasses",
        "owner": {
            "login": "tird",
            "id": 13370118,
            "avatar_url": "https://avatars.githubusercontent.com/u/13370118?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/tird",
            "html_url": "https://github.com/tird",
            "followers_url": "https://api.github.com/users/tird/followers",
            "following_url": "https://api.github.com/users/tird/following{/other_user}",
            "gists_url": "https://api.github.com/users/tird/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/tird/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/tird/subscriptions",
            "organizations_url": "https://api.github.com/users/tird/orgs",
            "repos_url": "https://api.github.com/users/tird/repos",
            "events_url": "https://api.github.com/users/tird/events{/privacy}",
            "received_events_url": "https://api.github.com/users/tird/received_events",
            "type": "User",
            "site_admin": false
        },
        "private": false,
        "description": null,
        "fork": false,
        "created_at": "2015-10-28T15:27:01Z",
        "updated_at": "2015-10-28T15:32:11Z",
        "pushed_at": "2015-10-28T15:32:11Z",
        "clone_url": "https://github.com/tird/addClasses.git",
        "homepage": null,
        "size": 108,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "network_count": 0,
        "subscribers_count": 1
    };

    repoDetailsService.getRepoDetail = function (name) {
        return $http.get(settings.githubUrl + 'repos/' + settings.user + '/' + name);
    }
}]);
