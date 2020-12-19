const path = require('path');

module.exports = function(app) {
    // GET /notes returns the notes.html file
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // GET * returns the index.html file if no matching route is found
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};