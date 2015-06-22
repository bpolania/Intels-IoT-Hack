/*
var sys = require("sys"),  
my_http = require("http");
var fs = require('fs');

my_http.createServer(function(request,response){  
    sys.puts("I got kicked");  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("Hello World");  
    response.end();  
}).listen(8080);  
sys.puts("Server Running on 8080"); 

var myData = {
  name:'test',
  version:'1.0'
}


var outputFilename = '/tmp/my.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 


var config = require('/tmp/my.json');
console.log(config.name + ' ' + config.version);

*/

var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

var fs = require('fs');

// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser());

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  
  delete require.cache['/tmp/my.json']
  
  var config = require('/tmp/my.json');
  console.log('Current Message' + config.name + ' ' + config.version); 
  var currentMessage = 'Current Message: ' + config.name + ' ' + config.version

  // result of our form
  var html = '<p>'+ currentMessage + ': </p>' +'<form action="/" method="post">' +
               'Enter your message to broadcast:' +
               '<input type="text" name="userMessage" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userMessage = req.body.userMessage;
  var html = 'Message Stored: ' + userMessage + '.<br>' +
             '<a href="/">Store a new Message.</a>';
    
  var myData = {
    name:userMessage,
    version:'1.0'
  }
  
  var outputFilename = '/tmp/my.json';
    
  fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});
      
  res.send(html);
});

app.listen(8080);