angular.module('gitExplorer').component('userInfo', {
    templateUrl: 'app/main/user-info/user-info.template.html',
    controller: function UserInfoController(settings, userInfoService) {
        var userInfoController = this;
        userInfoController.userInfo = userInfoService.userInfo;

        userInfoService.getUser(settings.user).then(function (response) {
            userInfoController.userInfo = response.data;
        });
    }
});