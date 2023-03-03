const merge = require('webpack-merge')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // css 文件资源压缩
const commonConfig = require('./webpack.common')

const config = {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // 通过不同键值对来配置多个
        // 基础库
        vendors: {
          test: /(react|react-dom)/,
          // test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors', // 可以不传
        },
        // 公共引用
        commons: {
          chunks: 'all',
          minChunks: 2,
          name: 'commons', // 可以不传
        },
      },
    },
  },
}

module.exports = merge(commonConfig, config)