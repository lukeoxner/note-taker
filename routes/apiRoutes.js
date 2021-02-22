// requiring in the noteData file
let noteData = require('../data/noteData');

module.exports = function (app) {
	// handling get requests for /api/notes
	app.get('/api/notes', function (req, res) {
		res.json(noteData);
	});

	// handling post requests for /api/notes
	app.post('/api/notes', function (req, res) {
		noteData.push(req.body);
		res.json(true);
	});
};
