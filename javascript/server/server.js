const express = require('express');
const app = express();
const compression = require('compression');
const winston = require('winston');
const DatabaseConnection = require('./DatabaseConnection');
const Config = require('./config.json');
const InteriorCurrent = require('./Controller/InteriorCurrent');

(new DatabaseConnection()).connect(Config.databaseURI);

// enable compression
app.use(compression());

// static routes
app.use(express.static('build'));
app.use(express.static('public'));

// webservice endpoints
// interior
app.get('/services/V1/interior/current', function (req, res) {
    (new InteriorCurrent()).render(req, res);
});

app.listen(3000);
winston.info('Webserver is running on port 3000');
