angular.module('intercomApp', [
        'ngIntercom' // or you can use 'angular-intercom'
    ])
    .value('fakeUser', {
        email: 'john.doe@example.com',
        name: 'John Doe',
        created_at: 1234567890,
        user_id: '9876'
    }).constant('INTERCOM_APPID', 'q12jy5vx').config(function($intercomProvider, INTERCOM_APPID) {
        // Either include your app_id here or later on boot
        $intercomProvider.appID(INTERCOM_APPID);

        // you can include the Intercom's script yourself or use the built in async loading feature
        $intercomProvider
            .asyncLoading(true)
    }).run(function($intercom, fakeUser) {
        // boot $intercom after you have user data usually after auth success
        $intercom.boot(fakeUser); // app_id not required if set in .config() block
    }).controller('MainCtrl', function($scope, $intercom, fakeUser) {

        $scope.user = fakeUser;

        // Register listeners to $intercom using '.$on()' rather than '.on()' to trigger a safe $apply on $rootScope
        $intercom.$on('show', function() {
            $scope.showing = true; // currently Intercom onShow callback isn't working
        });
        $intercom.$on('hide', function() {
            $scope.showing = false;
        });

        $scope.show = function() {
            $intercom.show();
        };

        $scope.hide = function() {
            $intercom.hide();
        };

        $scope.update = function(user) {
            $intercom.update(user);
        };

    });
