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
	app.post('/api/notes', (req, res) => {
		const newNote = req.body;
		console.log(newNote);
		let noteFile = path.join(__dirname, '../db/db.json');
		fs.readFile(noteFile, 'utf8', (error, data) => {
			if (error) {
				console.error(error);
			}
			let currentNotes = JSON.parse(data);

			// adding our new note to the current notes
			currentNotes.push(newNote);

			// generating id for each note to be used in note delete functionality
			currentNotes.forEach(function (note, i) {
				note.id = 1 + i;
			});

			// saving the notes with the new one added to the JSON file
			fs.writeFile(noteFile, JSON.stringify(currentNotes), (err) =>
				err ? console.error(err) : console.log('Note added!')
			);
			res.json(currentNotes);
		});
	});
};
