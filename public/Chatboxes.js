$(function(GeneralChat){
  var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/General");
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
  
$(function(ScheduledClear){
$("#cleardatabase").click(function() {
var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com");
ref.remove();
console.log("Cleared database");
    });
});

