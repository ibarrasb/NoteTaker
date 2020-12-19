var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// tell the server to fetch assets from public folder
app.use(express.static('public'));

// ROUTES to point the server to
// tells the server how to respond when users visit or request data from various URLs
require('./redirect/note')(app);
require('./redirect/html')(app);

// start the Express server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});