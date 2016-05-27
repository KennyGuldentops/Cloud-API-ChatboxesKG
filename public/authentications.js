$(function(ChatFunction){
  var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/General");
   $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = username;
          var text = $('#messageInput').val();
          var email = // Facebookdisplayname of  Gmail  of normale email of twitter

          ref.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      ref.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#ChatWindow'));
        $('#ChatWindow')[0].scrollTop = $('#ChatWindow')[0].scrollHeight;
      };
    });

//Facebook login via firebase
$(function(FaceBookLogin) {
  $("#FacebookLogin").click(function(){
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Users");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        window.alert("Login Failed!");
        Authenticated = false;
      } else {
        username = authData.facebook.displayName;
        document.getElementById("SignedInAs").innerHTML = "Logged in as: " + username;
  }
}, {
  scope: "email,user_likes" // the permissions requested
});

    $("#Logout").click(function() {
      ref.unauth();
      document.getElementById("SignedInAs").innerHTML = "Signed out";
    });
});
});

//Twitter login via firebase
$(function(TwitterLogin) {
  $("#TwitterLogin").click(function(){
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Users");
    ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        window.alert("Login Failed!");
      } else {
        username = authData.twitter.displayName;
        document.getElementById("SignedInAs").innerHTML = "Logged in as: " + username;
  }
});

    $("#Logout").click(function() {
      ref.unauth();
      document.getElementById("SignedInAs").innerHTML = "Signed out";
    });
});
});

//Google login via firebase
$(function(GoogleLogin) {
  $("#GoogleLogin").click(function(){
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Users");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        window.alert("Login Failed!");
      } else {
        username = authData.google.displayName;
        document.getElementById("SignedInAs").innerHTML = "Logged in as: " + username;
  }
});

    $("#Logout").click(function() {
      ref.unauth();
      document.getElementById("SignedInAs").innerHTML = "Signed out";
    });
});
});

//Email login via firebase

$(function(EmailAuthentication) {
$("#RegisterEmail").click(function() {
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Users");
ref.createUser({
  email    : $('#EmailInput').val(),
  password : $('#PasswordInput').val()
}, function(error, userData) {
  if (error) {
    window.alert("Error creating user:" + error);
  } else {
     window.alert("Successfully created user account with email: " + authData.password.email);
  }
});
});
});


$(function(EmailLogin){
  $("#LoginEmail").click(function() {
var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Users");
ref.authWithPassword({
   email    : $('#EmailInput').val(),
  password : $('#PasswordInput').val()
}, function(error, authData) {
  if (error) {
    window.alert("Login Failed!" + error);
  } else {
      username = authData.password.email;
      document.getElementById("SignedInAs").innerHTML = "Logged in as: " + username;
  } {
  remember: "sessionOnly" }
});
});
});

$(function(Vraagshow){
  var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Vragen");
  ref.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayVraag(message.vraag);
  
  function displayVraag(vraag) {
        $("#vraagid").text(vraag);
      };
  
});
});




