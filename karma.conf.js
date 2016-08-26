var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        browsers:   ['Chrome'],
        frameworks: ['jasmine'],
        reporters:  ['mocha'],

        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        colors: true,
        port: 9876,

        basePath: '',
        files: [
            'webpack.karma.context.js'
        ],
        preprocessors: {
            'webpack.karma.context.js': ['webpack']
        },
        exclude: [],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        }
    });
};
