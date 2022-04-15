const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'ignore-loader',
      },
      {
        test: /\.less$/,
        use: 'ignore-loader',
      }
    ]
  }
}

module.exports = merge(baseConf, prodConfig)