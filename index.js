/* eslint-disable no-console */
const { createServer } = require('http')
const next = require('next')
const { parse } = require('url')

const atom = require('./lib/atom')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const { pathname } = parse(req.url)

      if (/^\/atom\/?$/.test(pathname)) {
        res.setHeader('Content-Type', 'text/xml')
        res.end(atom())
        return
      }

      handle(req, res)
    }).listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(err => {
    console.log(err)
    throw err
  })
