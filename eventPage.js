var blacklistedIds = ["none"];

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (sender.id in blacklistedIds) {
      sendResponse({"result":"sorry, could not process your message"});
      return;  // don't allow this extension access
    } else if (request.myCustomMessage) {
      console.log("Aqui se debe cargar el usuario logeado en el app");

      new Notification('Got message from '+sender.id,
          { body: request.myCustomMessage.first_name + " " + request.myCustomMessage.middle_name + " "  + request.myCustomMessage.maiden_name});
      sendResponse({"result":"Ok, got your message"});
      loadData();
    } else {
      sendResponse({"result":"Ops, I don't understand this message"});
    }
  });

  function loadData() {
    new Notification("loadData");
    // var fakeUser = {
    //         email: 'john.doe@example.com',
    //         name: 'Wilmer Arteaga',
    //         created_at: 1234567890,
    //         user_id: '18130984'
    //     };
    // $intercom.boot(fakeUser);

      var fakeUser = {
              email: 'john.doe@example.com',
              name: 'New end',
              created_at: 1234567890,
              user_id: '12345'
          };
        // boot $intercom after you have user data usually after auth success
        $intercom.boot(fakeUser); // app_id not required if set in .config() block

    // angular.module("AngularChromeEx").controller("main", function ($intercom) {
    //   var fakeUser = {
    //           email: 'john.doe@example.com',
    //           name: 'New end',
    //           created_at: 1234567890,
    //           user_id: '12345'
    //       };
    //     // boot $intercom after you have user data usually after auth success
    //     $intercom.boot(fakeUser); // app_id not required if set in .config() block
    // });
  };
