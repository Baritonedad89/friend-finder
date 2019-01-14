const path = require('path');
const friends = require('../data/friends')

module.exports = function (app) {
    // root level
    app.get('/api/friendslist', (req, res) => {
        res.json(friends)
    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))

    })
}