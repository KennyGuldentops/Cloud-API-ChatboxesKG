var express = require('express');
var app = express();
var fs = require("fs");
var datani;
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
datani = JSON.parse( data );
});

app.get('/badwords', function (req, res) {

		  var word = datani.word;
		  for(var i = 0; i < datani.length; i++) {
			res.end( JSON.stringify(datani));
		  }
     
 
});

app.post('/add/:word', function (req, res) {



       console.log("searching if in database");
	   var word = datani.word;
		  for(var i = 0; i < datani.length; i++) {
			  if( req.params.word == datani[i].word){
				   res.end( JSON.stringify("already in database"));
				   var alreadyin = true;
			  }
			  else{
				   var alreadyin = false;
			  }
			   
		}
		if(alreadyin == false){
			datani.push({"word":req.params.word});
			res.end( JSON.stringify(datani))
		}

})


app.get('/:word', function (req, res) {
   // First read existing users.

       
	   console.log("searching if in database");
	   var word = datani.word;
		  for(var i = 0; i < datani.length; i++) {
			  if( req.params.word == datani[i].word){
				   res.end( JSON.stringify("true"));
			  }
			  else{
				   res.end( JSON.stringify("false"));
			  }
			   
		}
		
   
});

app.delete('/delete/:word', function (req, res) {
   // First read existing users.
	   for (var i = 0; i < datani.length; i++) {
			var cur = datani[i];
			if (cur.word == req.params.word) {
				datani.splice(i, 1);
				break;
			}
		}
       console.log( datani );
       res.end( JSON.stringify(datani));
 
});









var server = app.listen(5000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});