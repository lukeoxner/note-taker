// requiring in path module
const path = require('path');

module.exports = function (app) {
	// set up route for notes page
	app.get('/notes', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	// set up default route to home page
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};
