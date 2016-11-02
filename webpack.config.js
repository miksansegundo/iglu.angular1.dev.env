const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBrowserPlugin = require('webpack-browser-plugin')
var WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  cache: false,
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/app/app.module.js'
  },
  output: {
    path: './build',
    filename: '[name].bundle.js',
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
        include: path.resolve('src')
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
        // include: path.resolve('src'),
        loaders: ['style-loader', {
          loader: 'css-loader',
          query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
        }, 'postcss-loader']
      }
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json']
  },
  plugins: [
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
            // require('precss')({ /* ...options */ }),
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
    // new IconfontWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: true,
      template: 'src/index.html'
    }),
    new WebpackBrowserPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new WebpackNotifierPlugin()
    // new webpack.optimize.UglifyJsPlugin() // Optimize code
  ],
  devServer: {
    stats: 'minimal',
    compress: false,
    inline: true,
    historyApiFallback: true,
    port: 8080
  }
}
