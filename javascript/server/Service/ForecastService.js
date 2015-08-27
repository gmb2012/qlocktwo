const superagent = require('superagent');
const Config = require('../config.json');

var instance;

function ForecastService() {
    this.getResult = function () {
        return superagent.get(Config.forecastURI);
    };
}

module.exports = {
    getInstance: function() {
        if(!instance) {
            instance = new ForecastService();
        }

        return instance;
    }
};
