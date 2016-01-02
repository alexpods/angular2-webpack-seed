const webpack = require('webpack');
const path = require('path');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  context: __dirname + '/..',

  debug: true,
  target: 'web',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './public'
  },

  entry: {
    vendor: [
      'es6-shim',
      'es6-promise',
      'reflect-metadata',
      'zone.js/lib/browser/zone-microtask',
      'zone.js/lib/browser/long-stack-trace-zone',
      'rxjs'
    ],
    app: './src/index.ts'
  },

  output: {
    path: './public',
    filename: '[name].js',
    chunkFilenam: '[id].chunk.js',
    pathinfo: true
  },

  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity }),
    new CommonsChunkPlugin({ name: 'common', filename: 'common.js', minChunks: 2, chunks: ['app', 'vendor'] })
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
          configFileName: __dirname + '/tsconfig.json'
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  }
};