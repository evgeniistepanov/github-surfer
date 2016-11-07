angular.module('gitExplorer').component('userInfoFollowers', {
    templateUrl: 'app/main/user-info/user-info-followers/user-info-followers.template.html',
    controller: function UserInfoFollowersController(settings, userInfoService, $state) {
        var userInfoFollowersController = this;
        userInfoFollowersController.followers = [];

        userInfoFollowersController.getUserDetails = function (item) {
            settings.user = item.login;
            $state.go('main.user-info.index');
        };
        
        userInfoService.getUserFollowers(settings.user).then(function (response) {
            userInfoFollowersController.followers = response.data;
        });
    }
});