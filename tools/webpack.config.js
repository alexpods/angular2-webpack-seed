const webpack = require('webpack');
const path = require('path');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  context: __dirname + '/..',

  debug: true,
  target: 'web',
  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    colors: true,
    contentBase: './public'
  },

  entry: {
    app: './src/index.ts'
  },

  output: {
    path: './public',
    filename: '[name].js'
  },

  plugins: [
    new CommonsChunkPlugin('common.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          transpileOnly: true,
          configFileName: __dirname + '/tsconfig.json'
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  }
};