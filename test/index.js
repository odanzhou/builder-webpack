/* eslint-disable */
const path = require('path')
// 到template 目录
process.chdir(path.join(__dirname, 'smoke/template'))

describe('bilder-webpack test case', () => {
  require('./unit/webpack-base-test')
})