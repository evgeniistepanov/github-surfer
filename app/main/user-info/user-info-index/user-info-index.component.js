angular.module('gitExplorer').component('userInfoIndex', {
    templateUrl: 'app/main/user-info/user-info-index/user-info-index.template.html',
    controller: function UserInfoIndexController(settings, userInfoService) {
        var userInfoIndexController = this;
        userInfoIndexController.userInfo = userInfoService.userInfo;

        console.log('userInfoIndexController init');

        userInfoService.getUser(settings.user).then(function (response) {
            userInfoIndexController.userInfo = response.data;
        });
    }
});