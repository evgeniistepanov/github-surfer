angular.module('gitExplorer').component('testComponent', {
    templateUrl: 'app/main/test/test.template.html',
    controller: function TestController() {
        this.data = {
            val1: "Test!!!"
        }

    }
});