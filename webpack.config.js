const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'less-loader?sourceMap'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
