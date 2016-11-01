var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app/app.module.js'
  },
  output: {
    path: './build',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve('src'),
        loaders: ['style-loader', {
          loader: 'css-loader',
          query: { modules: true, localIdentName: '[name]__[local]___[hash:base64:5]' }
        }, 'postcss-loader']
      },
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        include: path.resolve('src')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        standard: {
          parser: 'babel-eslint'
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss (webpackInstance) {
          return [
            //require('postcss-autoreset')(),
            require('postcss-smart-import')({
              addDependencyTo: webpackInstance,
              root: __dirname,
              path: [path.join(__dirname, '../src')]
            }),
            require('postcss-url')({
              url: 'inline' // or "rebase" or "copy"
            }),
            require('precss')({ /* ...options */ }),
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
    new HtmlWebpackPlugin({
      inject: 'body',
      hash: true,
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(), // Avoid duplication in libs
   // new webpack.optimize.UglifyJsPlugin() // Optimize code
  ],
  devtool: 'eval-source-map',
  devServer: {
    stats: 'minimal'
  }
}
