$(function(ChatFunction){
  var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
   $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          ref.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      ref.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
    });


$(function(FaceBookLogin) {
  $("#fblogin").click(function(){
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        window.alert("Login Failed!");
      } else {
        var FBNaam = authData.facebook.displayName;
        console.log(authData.facebook.accessToken);
        console.log(authData.facebook.displayName);
        document.getElementById("username").innerHTML = "Talking as: " + FBNaam;
        window.alert("Logged in as: " + FBNaam);
   
  }
}, {
  scope: "email,user_likes" // the permissions requested
});

    $("#logout").click(function() {
      ref.unauth();
      document.getElementById("username").innerHTML = "Logged out";
    });
});
});


$(function(EmailAuthentication) {
$("#emaillogin").click(function() {
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
ref.createUser({
  email    : $('#email').val(),
  password : $('#password').val()
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
    window.alert("Error creating user:" + error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
     window.alert("Successfully created user account with email: " + authData.password.email);
  }
});
});
});


$(function(EmailLogin){
  $("#loginemail").click(function() {
var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
ref.authWithPassword({
   email    : $('#email').val(),
  password : $('#password').val()
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    window.alert("Login Failed!" + error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
     document.getElementById("username").innerHTML = "Talking as: " + authData.password.email;
     window.alert("Logged in with email: " + authData.password.email);
  } {
  remember: "sessionOnly" }
});
});
});


  
$(function(ScheduledClear){
$("#cleardatabase").click(function() {
var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
ref.remove();
console.log("Cleared database");
    });
});


