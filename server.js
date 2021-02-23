// requiring in necessary node modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// telling node i am creating an express server
const app = express();

// setting port for heroku deployment, or localhost
const PORT = process.env.PORT || 8090;

// setting up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));

// link to routes files (FYI the order matters...took me 2 hours to figure that out, lol)
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// setting up listener to start the server
app.listen(PORT, function () {
	console.log('App is listening on PORT: ' + PORT);
});
