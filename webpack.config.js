const {resolve} = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBrowserPlugin = require('webpack-browser-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const webpackValidator = require('webpack-validator')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
// const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

module.exports = (env) => {
  const {ifProd} = getIfUtils(env)
  const config = webpackValidator({
    context: resolve('src'),
    cache: false,
    devtool: ifProd('source-map', 'cheap-module-source-map'),
    entry: {
      app: './index.js',
      polyfills: ['picturefill', '../libs/object.watch.polyfill.js']
    },
    output: {
      path: resolve('build'),
      filename: ifProd('[name].bundle.[chunkhash].js', '[name].bundle.js'),
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js',
      publicPath: ''
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html!html-minify'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          loaders: ['ng-annotate', 'babel-loader'],
          include: resolve('src')
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg#.*)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(jpg)$/i,
          loader: 'responsive'
        },
        {
          test: /\.(svg|png|jpg)$/,
          loader: 'url-loader?limit=100000!img?progressive=true'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', {
            loader: 'css-loader',
            query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
          }, 'postcss-loader']
        }
      ]
    },
    plugins: removeEmpty([
      ifProd(new ProgressBarPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        names: ['polyfills', 'manifest']
      })),
      new HtmlWebpackPlugin({
        cache: false,
        inject: 'head',
        template: 'index.html.ejs'
      }),
      ifProd(new InlineManifestWebpackPlugin()),
      new webpack.LoaderOptionsPlugin({
        options: {
          'html-minify-loader': {
            minifyCSS: true
          },
          responsiveLoader: {
            sizes: [320, 640, 1024]
          },
          postcss (webpackInstance) {
            return [
              // require('postcss-autoreset')(),
              require('postcss-smart-import')({
                addDependencyTo: webpackInstance
              }),
              require('postcss-url')({
                url: 'inline' // or "rebase" or "copy"
              }),
              require('postcss-cssnext')({
                features: {
                  rem: {
                    rootValue: 10,
                    html: false
                  }
                }
              }),
              require('postcss-browser-reporter')(),
              require('postcss-reporter')({ clearMessages: true })
            ]
          }
        }
      }),
      new WebpackBrowserPlugin(),
      new WebpackNotifierPlugin(),
      // ifProd(new OfflinePlugin()),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      })
    ]),
    devServer: {
      stats: 'minimal',
      compress: false,
      inline: true,
      historyApiFallback: true,
      port: 8080
    }
  })

  if (env.debug) {
    console.log(config)
    debugger // eslint-disable-line
  }

  return config
}

