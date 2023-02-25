/* eslint-disable */

const glob = require('glob-all')

describe('Checking generated css and css files', () => {
  it('should generate html files', (done) => {
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.js',
      './dist/search_*.css',
    ])
    if(files.length > 0) {
      done()
    } else {
      throw new Error('no html generated')
    }
  })
})