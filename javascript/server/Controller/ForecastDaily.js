const winston = require('winston');
const superagent = require('superagent');
const ForecastService = require('../Service/ForecastService');

function ForecastDaily() {
    function transformItem(item) {
        var returnValue = {};
        returnValue[item.time * 1000] = {
            temperature: [ Math.round(item.temperatureMin), Math.round(item.temperatureMax) ],
            icon: item.icon,
            precipitationProbability: item.precipProbability,
            wind: Math.round(item.windSpeed * 3.6)
        };

        return returnValue;
    }

    function transform(data) {
        return [ data[1], data[2], data[3] ].map(transformItem);
    }

    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        ForecastService.getInstance().getResult().then(
            function (body) {
                res.send(transform(body.daily.data));
            },
            function (err) {
                winston.info('Foreacast service error : ' + err);
            });
    };
}

module.exports = ForecastDaily;
