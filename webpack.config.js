'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        './src/app/module/module.js',
        './node_modules/bulma/css/bulma.min.css'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        root: __dirname,
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.css$/, loader: "style!css"
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: './build',
        stats: 'minimal'
    }
};
