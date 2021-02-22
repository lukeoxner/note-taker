// requiring in necessary node modules
const express = require('express');

// telling node i am creating an express server
const app = express();

// setting port for heroku deployment, or localhost
let PORT = process.env.PORT || 8080;

// setting up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/db'));

// link to routes files
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

// setting up listener to start the server
app.listen(PORT, function () {
	console.log('App is listening on PORT: ' + PORT);
});
