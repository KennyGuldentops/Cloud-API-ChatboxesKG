var ref = new Firebase("https://chatbox-cloudapi.firebaseio.com/Vragen");
var refmessages = new Firebase("https://chatbox-cloudapi.firebaseio.com/General");
var refPoints = new Firebase("https://chatbox-cloudapi.firebaseio.com/Points");

var message;
var nummervraag = 0;
var bijtellen = true;
var point = 1;
var json = '{' + 
'"Vragen":[' +
'{"vraag":"What word becomes shorter when you add two letters to it?","antwoord":"short"},'+
'{"vraag":"Say the name of the rock that can breath","antwoord":"Dwayne Jhonsen"},'+
'{"vraag":"Poor people have it. Rich people need it. If you eat it you die. What is it?","antwoord":"nothing"},'+
'{"vraag":"What letter stand on 11th place on a Qwerty keyboard ","antwoord":"a"},'+
'{"vraag":"What class belongs the Axolotl to?","antwoord":"amphibia"}]}';

var parsed = JSON.parse(json);





ref.on('child_added', function(snapshot) {
    message = snapshot.val();
    displayVraag(message.antwoord);
	
	
	function displayVraag(antwoord) {
        console.log("antwoord:"+antwoord);
    };
});

refmessages.limitToLast(2).on('child_added', function(snapshotmessage) {
	var possibleanswer = snapshotmessage.val();
	var email = possibleanswer.email
	var res = email.replace("@", "+");
	var emailusable = res.replace(".", "^");
	console.log(possibleanswer.text);
		refPoints.child(emailusable).on('value' , function(snap){
			
			if(snap.val() == null){
				refPoints.child(emailusable).set( {points: "0"});
			}
			else if(message.antwoord == possibleanswer.text){
				
				    refPoints.child(emailusable).on('value', function(snap){
					var punt = snap.val().points;
					if(bijtellen){
					bijtellen = false;
					punt++;
					$("#pointsnav").text("Points: "+punt);
					refPoints.child(emailusable).set( {points: punt});
					console.log("juist antwoord van: " + possibleanswer.name + "antwoord: " + message.antwoord);
					$("#vraagid").text(possibleanswer.name + " Heeft eerst geraden");
					}
				});
					
					
				
				
				
				
			}
		});
		
		
		
		jQuery(function($) {
 
			  function translate(source, target, content, callback) {
				$.ajax({
				  method:'GET',
				  url: 'https://api-platform.systran.net/translation/text/translate?key=c784e540-5ec9-4a8c-81ec-0b493b119f21',
				  dataType: 'text',
				  data: {
					source: source,
					target: target,
					input: possibleanswer.text
				  },
				  success: function(data) {
					if (typeof data === 'string')
					  try {
						data = JSON.parse(data);
						
					  } catch (exp) {

					  }

					var err;

					if (data && data.outputs && Array.isArray(data.outputs)) {
					  data = data.outputs[0];

					  if (data && data.output)
						data = data.output;

					  if (data && data.error)
						err = data.error;
					}

					callback(err, data);
				  },
				  error: function(xhr, status, err) {
					callback(err);
				  }
				});
			  }

			  function getTextFromHtml(content) {
				content = content.replace(/<div>(?:<br>)?/gi, '\n').replace(/<\/div>/gi, '');
				content = content.replace(/<p>&nbsp;<\/p>/gi, '\n').replace(/<p>/gi, '').replace(/\n*<\/p>/gi, '\n');
				content = content.replace(/<br[ \/]*>/gi, '\n');
				content = content.replace(/&nbsp;/gi, ' ');
				content = content.replace(/<([^> ]*)[^>]*>/gi, '');  //clean html markup
				content = content.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">"); //unescape some entities
				return content;
			  }

			  var $inputTextEditor = $('#inputTextEditor');
			  var $outputTextEditor = $('#outputTextEditor');
			  var $translating = $('#translating');
			  var $source = $('#source');
			  var $target = $('#target');

			  function launchTranslation() {
				//Extract text to translate
				var toTranslate = getTextFromHtml($inputTextEditor.html());
				translate($source.val(), $target.val(), toTranslate, function(err, result) {
				  if (!err) {
					//Show result
				 
					$('<div/>').text(result).prepend($('<em/>').text(possibleanswer.name+': ')).appendTo($('#outputTextEditor'));
					$('#outputTextEditor')[0].scrollTop = $('#outputTextEditor')[0].scrollHeight;
				  } else {
					if (console.log)
					  console.log('Error while doing translation: ' + err);
				  }
				});
			  }

			  $('#translateButton').click(launchTranslation);
			  launchTranslation();
			});
			 
		
		
		
		
			
});



setInterval(function() {

bijtellen = true;
  var vraag = parsed.Vragen[nummervraag].vraag;
  var antwoord = parsed.Vragen[nummervraag].antwoord;
  ref.push({vraag: vraag, antwoord: antwoord});
  nummervraag++;
  if(nummervraag == 5)
	  nummervraag = 0;
	  
 }, 20000);
 




