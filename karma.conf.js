// Karma configuration
const webpackConfig = require('./webpack.config')(process.env)
webpackConfig.entry = {}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['./test/spec.bundle.js'],
    exclude: [
    ],
    preprocessors: {
      './spec.bundle.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    autoWatchBatchDelay: 300,
    browsers: ['Chrome'],
    singleRun: true
  })
}
