const winston = require('winston');
const superagent = require('superagent');
const ForecastService = require('../Service/ForecastService');

function Forecast() {
    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        ForecastService.getInstance().getResult().then(
            function (body) {
                res.send(JSON.stringify(body.daily));
            },
            function (err) {
                winston.info('Foreacast service error : ' + err);
            });
    };
}

module.exports = Forecast;
