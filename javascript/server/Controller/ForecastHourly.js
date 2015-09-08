const winston = require('winston');
const superagent = require('superagent');
const ForecastService = require('../Service/ForecastService');

function ForecastHourly() {
    function transformItem(item) {
        var returnValue = {};
        returnValue[item.time * 1000] = {
            temperature: Math.round(item.temperature),
            icon: item.icon,
            precipitationProbability: item.precipProbability,
            wind: Math.round(item.windSpeed * 3.6)
        };

        return returnValue;
    }

    function transform(data) {
        return [ data[1], data[4], data[8], data[12], data[16], data[20] ].map(transformItem);
    }

    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        ForecastService.getInstance().getResult().then(
            function (body) {
                res.send(transform(body.hourly.data));
            },
            function (err) {
                winston.info('Foreacast service error : ' + err);
            });
    };
}

module.exports = ForecastHourly;
