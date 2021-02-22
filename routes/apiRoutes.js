// requiring in modules needed
const fs = require('fs');
const path = require('path');

module.exports = function (app) {
	// handling get requests for /api/notes
	app.get('/api/notes', (req, res) => {
		let noteFile = path.join(__dirname, '../db/db.json');
		fs.readFile(noteFile, 'utf8', (error, data) => {
			if (error) {
				console.error(error);
			}
			res.json(JSON.parse(data));
		});
	});

	// handling post requests for /api/notes
	app.post('/api/notes', function (req, res) {
		let newNote = req.body;
		console.log(newNote);
		let noteFile = path.join(__dirname, '../db/db.json');
		fs.readFile(noteFile, 'utf8', (error, data) => {
			if (error) {
				console.error(error);
			}
			let currentNotes = JSON.parse(data);

			currentNotes.push(newNote);

			fs.writeFile(noteFile, JSON.stringify(currentNotes), (err) =>
				err ? console.error(err) : console.log('Note added!')
			);
			res.json(currentNotes);
		});
	});
};
