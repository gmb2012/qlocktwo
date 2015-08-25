const express = require('express');
const app = express();
const compression = require('compression');
const winston = require('winston');
const DatabaseConnection = require('./DatabaseConnection');
const Config = require('./config.json');
const InteriorCurrent = require('./Controller/InteriorCurrent');
const InteriorHistory = require('./Controller/InteriorHistory');
const ExteriorCurrent = require('./Controller/ExteriorCurrent');

(new DatabaseConnection()).connect(Config.databaseURI);

// enable compression
app.use(compression());

// static routes
app.use(express.static('build'));
app.use(express.static('public'));

// webservice endpoints
// interior current
app.get('/services/V1/interior/current', function (req, res) {
    (new InteriorCurrent()).render(req, res);
});

// interior current
app.get('/services/V1/interior/history', function (req, res) {
    (new InteriorHistory()).render(req, res);
});

// exterior current
// interior current
app.get('/services/V1/exterior/current', function (req, res) {
    (new ExteriorCurrent()).render(req, res);
});

app.listen(3000);
winston.info('Webserver is running on port 3000');
