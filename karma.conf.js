module.exports = function (config) {
    var _config = {
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            {pattern: './karma-test-shim.js', watched: false}
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: {
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loader: 'ts-loader'
                    },
                    {
                        test: /\.html$/,
                        loader: 'raw'
                    }
                ]
            }
        },

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};