function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

}

function signOut() {
     var auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then(function () {
     console.log('User signed out.');
   });
}


$(function(FaceBookLogin) {
  $("#fblogin").click(function(){
    var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Chatboxes.html");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        window.alert("Login Failed!");
      } else {
        var FBNaam = authData.facebook.displayName;
        console.log(authData.facebook.accessToken);
        console.log(authData.facebook.displayName);
        //document.getElementById("username").innerHTML = "Talking as: " + FBNaam;
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
  email    : $('#inputUsernameEmail').val(),
  password : $('#inputPassword').val()
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
   email    : $('#inputUsernameEmail').val(),
  password : $('#inputPassword').val()
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    window.alert("Login Failed!" + error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
     //document.getElementById("username").innerHTML = "Talking as: " + authData.password.email;
     window.alert("Logged in with email: " + authData.password.email);
  } {
  remember: "sessionOnly" }
});
});
});