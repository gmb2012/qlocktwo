const mongoose = require('mongoose');
const winston = require('winston');

function DatabaseConnection() {
    this.connect = function (uri) {
        // connect to database
        mongoose.connect(uri);

        mongoose.connection.on('error', function (err) {
            winston.error('Impossible to connect to DB: ' + err);
        });

        mongoose.connection.once('open', function (callback) {
            winston.info('Connected to MongoDB');
        });
    };
}

module.exports = DatabaseConnection;
