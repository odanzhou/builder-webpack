/* eslint-disable */

const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')

const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: '10000ms'
})

// 进入 template 目录
process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod')
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err)
      process.exit(2)
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }))
    const start = Date.now()
    console.log('webpack build success, start: ', start)
    // 添加测试文件路径
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    // 执行用例
    mocha.run()
    console.log('webpack files test, used: ', (Date.now() - start) / 1000, 's')
  })
})