var mongoose = require('mongoose');

function DatabaseConnection() {
    this.connect = function (uri) {
        // connect to database
        mongoose.connect(uri);

        /* eslint-disable no-console */
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
        mongoose.connection.once('open', function (callback) {
            console.log('Connected to MongoDB');
        });
        /* eslint-enable */
    };
}

module.exports = DatabaseConnection;
