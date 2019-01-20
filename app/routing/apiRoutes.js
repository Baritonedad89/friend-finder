const path = require('path');
const friends = require('../data/friends')
const arraySort = require('array-sort');

module.exports = function (app) {
    // root level
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    });

    app.post('/api/friends', (req, res) => {
        // captures current users scores
        let userCurrentData = req.body;
        let bestMatch;
        let results = 0;
        for (let i = 0; i < friends.length; i++) {
            results = 0;
            const currentFriend = friends[i];
            for (let j = 0; j < currentFriend.scores.length; j++) {
                results += Math.abs(parseInt(userCurrentData.scores[j]) - parseInt(currentFriend.scores[j]));
            }
            if (!bestMatch || bestMatch.compatibleScore > results) {
                bestMatch = currentFriend;
                bestMatch.compatibleScore = results;
            }

        };
        friends.push(userCurrentData);
        return res.json(bestMatch);

    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })
}