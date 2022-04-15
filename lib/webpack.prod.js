const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base')

const prodConfig = {

  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // 外部引用
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@18/umd/react.production.min.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
          global: 'ReactDOM'
        }
      ]
    }),
  ],
  optimization: {
    // // 公共包
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /(react|react-dom)/,
    //       name: 'vendors', // 将其添加到HtmlWebpackPlugin 的chunks中，才能加到html文件中
    //       chunks: 'all'
    //     }
    //   }
    // },
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    },
  },
}

module.exports = merge(baseConf, prodConfig)