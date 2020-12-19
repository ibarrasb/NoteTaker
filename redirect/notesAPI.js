var fs = require('fs');
var path = require('path');

module.exports = function(app) {
	//retrieves all data stored in db as JSON
	app.get('/api/notes', function(req, res) {
		let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
		res.json(notes);
	});
	//recives user input, adds it to the db as JSON
	app.post('/api/notes', function(req, res) {
		let input = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
		//pushes the data into the db
		input.push(req.body);

		let newNotes = JSON.stringify(input);
		fs.writeFileSync('./db/db.json', newNotes);

		res.json(req.body);
	});

	app.delete('/api/notes/:id', function(req, res) {
		//gets the id of the selected note
		let id = req.params.id;
		//reads the notes and recieves it as JSON
		let savedNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
		//finds the position of selected note
		let index = savedNotes.findIndex( element => {
			if (element.id === id) return true;
		});
		//removes notes at selected index
		savedNotes.splice(index, 1);
		//updates the notes with the newly deleted notes and adds it to the db
		var newNotes = JSON.stringify(savedNotes);
		fs.writeFileSync('./db/db.json', newNotes);
		res.send('Note Deleted');
	})
};
