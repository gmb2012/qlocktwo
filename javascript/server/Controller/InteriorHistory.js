const winston = require('winston');

function InteriorHistory() {
    this.now = new Date();

    this.getBuckets = function () {
        var returnValue = {};

        for (var i = 0; i <= 7; i += 1) {
            var currentDate = new Date(this.now - (i * 3600 * 1000));
            returnValue[currentDate.getHours()] = {
                temperature: (Math.round(Math.random() * 50)).toString(),
                humidity: (Math.round(Math.random() * 100) / 100).toString()
            };
        }

        return returnValue;
    };

    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        res.send(JSON.stringify(this.getBuckets()));
    };
}

module.exports = InteriorHistory;
