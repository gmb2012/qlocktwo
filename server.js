"use strict";

let express = require('express');
let app = express();
let compression = require('compression');
let interiorCurrentService = require('./javascript/server/Interior/InteriorCurrentService');

// enable compression
app.use(compression());

// static routes
app.use(express.static('build'));
app.use(express.static('public'));

// webservice endpoints
// interior
app.get('/services/V1/interior/current', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(interiorCurrentService()));
});

app.listen(3000);
/* eslint-disable no-console */
console.log('Webserver is running on port 3000');
/* eslint-enable */
