var path = require('path'),
    targetPath = path.join(__dirname, 'build', 'assets'),
    webpack = require('webpack'),
    config;

config = {
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    entry: {
        js: './javascript/client/app.js'
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
    }/*,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]*/
};

module.exports = config;
