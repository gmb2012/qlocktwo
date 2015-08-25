const winston = require('winston');
const superagent = require('superagent');
const Config = require('../config.json');
const UnitConversion = require('../UnitConversion');
const DateUtil = require('../DateUtil');

function ExteriorCurrent() {
    const unitConversion = new UnitConversion();
    const dateUtil = new DateUtil();

    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        // super agent call
        superagent
            .get(Config.forecastURI)
            .end(function (wsErr, wsResponse) {
                if (wsResponse && wsResponse.ok) {
                    res.send(JSON.stringify({
                        temperature: Math.round(unitConversion.fahrenheitToCelsius(wsResponse.body.currently.temperature)),
                        humidity: wsResponse.body.currently.humidity,
                        wind: Math.round(unitConversion.milesToKilometer(wsResponse.body.currently.windSpeed)),
                        sunrise: dateUtil.localeDateFromUTCTimestamp(wsResponse.body.daily.data[0].sunriseTime * 1000),
                        sunset: dateUtil.localeDateFromUTCTimestamp(wsResponse.body.daily.data[0].sunsetTime * 1000),
                        moon: wsResponse.body.daily.data[0].moonPhase
                    }));
                } else {
                    winston.info('Foreacast service error : ' + wsErr);
                }
            });
    };
}

module.exports = ExteriorCurrent;
