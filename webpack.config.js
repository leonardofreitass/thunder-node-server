const path = require('path');

module.exports = {
    entry: {
        "bundle": './app/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
