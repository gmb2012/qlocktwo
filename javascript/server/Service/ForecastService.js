const superagent = require('superagent');
const Config = require('../config.json');
const Promise = require('promise');

var instance;

function ForecastService() {
    var resultPromise;
    var callTime;

    function callService() {
        console.log("ws call");
        return new Promise(function (resolve, reject) {
            superagent.get(Config.forecastURI).end(function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    this.getResult = function () {
        if (!resultPromise || (callTime + Config.forecastCachingTime) < (new Date()).getTime()) {
            resultPromise = callService();
            callTime = (new Date()).getTime();
        }

        return resultPromise;
    };
}

module.exports = {
    getInstance: function() {
        if (!instance) {
            instance = new ForecastService();
        }

        return instance;
    }
};
