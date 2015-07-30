'use strict';

var path = require('path'),
    targetPath = path.join(__dirname, 'build', 'assets'),
    webpack = require('webpack'),
    config;

config = {
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    entry: {
        js: './javascript/app.js'
    },
    output: {
        path: targetPath,
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    require.resolve('babel-loader')
                ]
            },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    }
};


module.exports = config;
