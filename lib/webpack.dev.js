const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')

const config = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 设置 hot: true 会自动添加，不用在这里添加了
  ],
  devServer: {
    contentBase: './dist',
    hot: true, // 设置 hot: true 会自动添加 HotModuleReplacementPlugin 插件
    stats: 'errors-only',
  },
}

module.exports = merge(commonConfig, config)