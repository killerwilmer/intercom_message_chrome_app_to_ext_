var myApp = angular.module('AngularChromeEx',  ['ngIntercom']);


myApp.constant('INTERCOM_APPID', 'q12jy5vx').config(function($intercomProvider, INTERCOM_APPID) {
        // Either include your app_id here or later on boot
        $intercomProvider.appID(INTERCOM_APPID);

        // you can include the Intercom's script yourself or use the built in async loading feature
        $intercomProvider
            .asyncLoading(true)
    }).run(function($intercom) {
      var fakeUser = {
              email: 'fake@example.com',
              name: 'fake',
              created_at: 1234567890,
              user_id: '123'
          };
        // boot $intercom after you have user data usually after auth success
        $intercom.boot(fakeUser); // app_id not required if set in .config() block
    }).controller('MainCtrl', function($scope, $intercom) {

        // $scope.user = fakeUser;

        new Notification("MainController");

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

// ﻿var myApp = angular.module('AngularChromeEx',  ['ngIntercom']);
//
// myApp.constant('INTERCOM_APPID', 'q12jy5vx');
//
// myApp.config(function($intercomProvider, INTERCOM_APPID) {
//         // Either include your app_id here or later on boot
//         $intercomProvider.appID(INTERCOM_APPID);
//
//         // you can include the Intercom's script yourself or use the built in async loading feature
//         $intercomProvider.asyncLoading(true)
//     });
//
//     var fakeUser, {
//             email: 'john.doe@example.com',
//             name: 'Buenas',
//             created_at: 1234567890,
//             user_id: '18130984'
//         };
//
// myApp.run(function($intercom) {
//             // boot $intercom after you have user data usually after auth success
//             $intercom.boot(fakeUser); // app_id not required if set in .config() block
//         });
//
// myApp.controller('MainCtrl', function($scope, $intercom) {
//
//         $scope.user = fakeUser;
//
//         new Notification("MainController");
//
//         // Register listeners to $intercom using '.$on()' rather than '.on()' to trigger a safe $apply on $rootScope
//         $intercom.$on('show', function() {
//             $scope.showing = true; // currently Intercom onShow callback isn't working
//         });
//         $intercom.$on('hide', function() {
//             $scope.showing = false;
//         });
//
//         $scope.show = function() {
//             $intercom.show();
//         };
//
//         $scope.hide = function() {
//             $intercom.hide();
//         };
//
//         $scope.update = function(user) {
//             $intercom.update(user);
//         };
//
//     });
