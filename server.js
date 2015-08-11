'use strict';

const express = require('express');
const app = express();
const compression = require('compression');
const mongoose = require('mongoose');
const Climate = require('./javascript/server/Model/Climate');
const LogError = require('./javascript/server/LogError');

// connect to database
mongoose.connect('mongodb://qlocktwo:qlocktwo@ds031903.mongolab.com:31903/qlocktwo');
const db = mongoose.connection;
/* eslint-disable no-console */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('Connected to MongoDB');
});
/* eslint-enable */

// enable compression
app.use(compression());

// static routes
app.use(express.static('build'));
app.use(express.static('public'));

// webservice endpoints
// interior
app.get('/services/V1/interior/current', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    let climate = new Climate();
    climate.findMostCurrent().then(function (doc) {
        res.send(JSON.stringify(
            { temperature: doc.interior.temperature, humidity: doc.interior.humidity }));
    }, function (err) {
        LogError.error('Error in InteriorCurrentService - unable to find most current date: ' + err);
        res.status(500).send('Error in InteriorCurrentService - unable to find most current date: ' + err);
    });
});

app.listen(3000);
/* eslint-disable no-console */
console.log('Webserver is running on port 3000');
/* eslint-enable */
