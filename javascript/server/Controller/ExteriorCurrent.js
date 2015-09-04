const winston = require('winston');
const superagent = require('superagent');
const ForecastService = require('../Service/ForecastService');

function ExteriorCurrent() {
    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        ForecastService.getInstance().getResult().then(
            function (body) {
                res.send(JSON.stringify({
                    temperature: Math.round(body.currently.temperature),
                    humidity: body.currently.humidity,
                    wind: Math.round(body.currently.windSpeed * 3.6),
                    sunrise: body.daily.data[0].sunriseTime * 1000,
                    sunset: body.daily.data[0].sunsetTime * 1000,
                    moon: body.daily.data[0].moonPhase
                }));
            },
            function (err) {
                winston.info('Foreacast service error : ' + err);
            });
    };
}

module.exports = ExteriorCurrent;
