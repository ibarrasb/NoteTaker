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
		//delete
	
	})






};
