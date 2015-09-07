const winston = require('winston');
const superagent = require('superagent');
const ForecastService = require('../Service/ForecastService');

function ForecastHourly() {
    function transformItem(item) {
        var returnValue = {};
        returnValue[item.time * 1000] = {
            temperature: Math.round(item.temperature),
            icon: item.icon,
            precipationProbability: item.precipProbability,
            wind: Math.round(item.windSpeed * 3.6)
        };

        return returnValue;
    }

    function transform(data) {
        return [ data[0], data[3], data[7], data[11], data[15], data[19] ].map(transformItem);
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
