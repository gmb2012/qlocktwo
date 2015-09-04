const winston = require('winston');
const superagent = require('superagent');
const UnitConversion = require('../UnitConversion');
const ForecastService = require('../Service/ForecastService');

function ExteriorCurrent() {
    const unitConversion = new UnitConversion();

    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        // super agent call
        ForecastService.getInstance().getResult().then(
            function (body) {
                res.send(JSON.stringify({
                    temperature: Math.round(unitConversion.fahrenheitToCelsius(body.currently.temperature)),
                    humidity: body.currently.humidity,
                    wind: Math.round(unitConversion.milesToKilometer(body.currently.windSpeed)),
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
