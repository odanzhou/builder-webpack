
if(typeof window === 'undefined') {
  global.window = {}
}

const fs = require('fs')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')


const SSR = require('../dist/search-server')
console.log('SSR', JSON.stringify(SSR))

const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')
const data = require('./data.json')
const renderMarkup = (str) => {
  const dataStr = JSON.stringify(data)
  return template.replace('<!--HTML_PLACEHOLDER-->', str).replace('<!--INITAL_DATA_PLACHOLDER-->',
    `<script>window.__inital_data=${dataStr}</script>`
  )
}

const server = (port) => {
  const app = express()
  app.use(express.static('dist'))
  app.get('/search', (req, res) => {
    const htmlText = renderMarkup(renderToString(SSR))
    res.status(200).send(htmlText)
  })
  app.listen(port, () => {
    console.log('666666666 on port: ', port)
  })
}

server(process.env.PORT || 3000)