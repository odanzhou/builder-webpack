/* eslint-disable */
const assert = require('assert')
const path = require('path')
const rootPath = process.cwd()
const getFullPath = (position) => path.join(rootPath, position)
describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.common')
  console.log('baseConfig', baseConfig)
  it('entry', () => {
    assert.equal(baseConfig.entry.index, getFullPath('src/pages/index/index.js'))
    assert.equal(baseConfig.entry.search, getFullPath('src/pages/search/index.js'))
  })
})