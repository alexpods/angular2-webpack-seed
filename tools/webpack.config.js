var webpack = require('webpack');
var path = require('path');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  debug: true,
  devtool: 'source-map',

  devServer: {
    inline: true,
    colors: true,
    contentBase: path.join(__dirname, '..', 'public'),
    historyApiFallback: true
  },

  entry: {
    vendor: [
      '@reactivex/rxjs',
      'zone.js',
      'reflect-metadata',
      'angular2/core'
    ],
    app: './src/index.ts'
  },

  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: '[name].js'
  },

  plugins: [
    new CommonsChunkPlugin('common.js')
  ],

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          transpileOnly: true,
          configFileName: 'tsconfig.json'
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  }
};