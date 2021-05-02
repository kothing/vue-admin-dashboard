/**
 * Express server.
 */

const express = require('express')
const app = express()
const chalk = require('chalk')

const port = 8001

// CORS policy
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
  )
  res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// router
app.use('/', require('./routes/index'))
app.use('/api', require('./routes/api'))
app.use('/auth', require('./routes/auth'))

/* middleware with an arity of 4 are considered error handling middleware. */
app.use(function (err, _req, res, _next) {
  res.status(err.status || 500)
  res.send({
    error: err.message,
    code: err.status,
  })
})

/* custom JSON 404 middleware. */
app.use(function (_req, res) {
  res.status(404)
  res.send({
    error: 'Error request !',
  })
})

/* istanbul ignore next */
app.listen(port, function () {
  const appUrl = `http://localhost:${port}/`
  console.log(`${chalk.green('success')} Server running at: ${chalk.green(appUrl)}`)
})
