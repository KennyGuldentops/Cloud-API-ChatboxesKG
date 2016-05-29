var points = 0;
var username = null;
$(function(ChatFunction){
  var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/General");
 
   $('#messageInput').keypress(function (e) {

        if (e.keyCode == 13) {
			if(username == null){
				$("#SignedInAs").text("Please sign in first").css('color', 'red');
			}else{		
				var name = username;
				var text = $('#messageInput').val();
				var emailauth = email;
			}

          ref.push({name: name, text: text, email: emailauth, points: points});
          $('#messageInput').val('');
        }
      });
      ref.limitToLast(2).on('child_added', function(snapshot) {
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
		email = authData.facebook.email;
        $("#SignedInAs").text("Logged in as: "+username).css('color', 'cyan');
		
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
        $("#SignedInAs").text("Logged in as: "+username).css('color', 'cyan');
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
        $("#SignedInAs").text("Logged in as: "+username).css('color', 'cyan');
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
      $("#SignedInAs").text("Logged in as: "+username).css('color', 'cyan');
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


$(document).ready(function(){
    $("#buttonid").click(function(){
		var zoekdit = $("#myText").val();
		console.log(zoekdit);
		
		$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/tags/"+zoekdit+"/media/recent?access_token=2670522640.1677ed0.4a9db9acfa804aba88139ad12255ed3c",
			success: function(response) {
				
				  console.log(response);
				  document.getElementById(1).src = response.data[1].images.standard_resolution.url;
				  document.getElementById(2).src = response.data[2].images.standard_resolution.url;
				  document.getElementById(3).src = response.data[3].images.standard_resolution.url;
			}
		});
		
            

    });
});






