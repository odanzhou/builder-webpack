const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.common')
// const {
//   entry, commonPlugins, outputPath, rules,
// } = require('./webpack.common.ssr')

const config = {
  output: {
    filename: '[name]-server.js',
    libraryTarget: 'umd',
  },
  mode: 'none', // 'development' || 'production' || 'none',
  externals: [nodeExternals({
    // allowlist: ['react', 'react-dom']
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'ignore-loader',
      },
      {
        test: /\.less$/,
        use: 'ignore-loader',
      },
    ],
  },
}

module.exports = merge(commonConfig, config)