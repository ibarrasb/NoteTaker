var fs = require('fs');
var path = require('path');

module.exports = function(app) {
	//retrieves all data stored in db as JSON
	app.get('/api/notes', function(req, res) {
		let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
		res.json(notes);
	});
	





};
