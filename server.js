//npm insall express
var express = require("express");
//make the server
var app = express();
//set up port to local host 8080
var PORT = process.env.PORT || 8080;
//allow to parse data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//be able to use the public folder
app.use(express.static('public'));
//routes to selected servers and tells how to respond to the request
require('./redirect/notesAPI')(app);
require('./redirect/html')(app);
//Starts server, lets user know its working..
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});