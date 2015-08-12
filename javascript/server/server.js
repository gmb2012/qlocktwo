const express = require('express');
const app = express();
const compression = require('compression');
const winston = require('winston');
const Climate = require('./Model/Climate');
const DatabaseConnection = require('./DatabaseConnection');
const Config = require('./config.json');

(new DatabaseConnection()).connect(Config.databaseURI);

// enable compression
app.use(compression());

// static routes
app.use(express.static('build'));
app.use(express.static('public'));

// webservice endpoints
// interior
app.get('/services/V1/interior/current', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    const climate = new Climate();
    climate.findMostCurrent().then(function (doc) {
        res.send(JSON.stringify(
            { temperature: doc.interior.temperature, humidity: doc.interior.humidity }));
    }, function (err) {
        winston.error('Error in InteriorCurrentService - unable to find most current date: ' + err);
        res.status(500).send('Error in InteriorCurrentService - unable to find most current date: ' + err);
    });
});

app.listen(3000);
/* eslint-disable no-console */
console.log('Webserver is running on port 3000');
/* eslint-enable */
