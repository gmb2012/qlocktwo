const winston = require('winston');
const Climate = require('climateModel');

function InteriorCurrent() {
    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        const climate = new Climate();
        climate.findMostCurrent().then(function (doc) {
            res.send(JSON.stringify({ temperature: doc.interior.temperature, humidity: doc.interior.humidity }));
        }, function (err) {
            winston.error('Error in InteriorCurrentService - unable to find most current date: ' + err);
            res.status(500).send('Error in InteriorCurrentService - unable to find most current date: ' + err);
        });
    };
}

module.exports = InteriorCurrent;

