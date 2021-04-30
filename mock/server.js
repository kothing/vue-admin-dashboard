/**
 * Api serve
 */
var apiKeys = ['foo', 'bar', 'baz']
var auth = require('./json/auth.json')
var users = require('./json/users.json')
var repos = require('./json/repos.json')
var userRepos = require('./json/userRepos.json')

const port = 8001

/**
 * Module dependencies.
 */

var express = require('express')
var app = express()

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
var indexRouter = require('./routes/index')

// example: http://localhost:port/
app.use('/', indexRouter)

function error (status, msg) {
  var err = new Error(msg)
  err.status = status
  return err
}

/* API url example: http://localhost:port/auth */
app.post('/auth', function (_req, res, _next) {
  res.send(auth)
})

app.use('/api', function (req, _res, next) {
  const key = req.query['api-key']

  // key isn't present
  if (!key) return next(error(400, 'api key required'))

  // key is invalid
  if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'))

  // all good, store req.key for route access
  req.key = key
  next()
})

/* API url example: http://localhost:port/api/users/?api-key=foo */
app.get('/api/users', function (_req, res, _next) {
  res.send(users)
})

/* API url example: http://localhost:port/api/repos/?api-key=foo */
app.get('/api/repos', function (_req, res, _next) {
  res.send(repos)
})

/* API url example: http://localhost:port/api/user/tobi/repos/?api-key=foo */
app.get('/api/user/:name/repos', function (req, res, next) {
  const name = req.params.name
  const user = userRepos[name]
  if (user) {
    res.send(user)
  } else {
    next()
  }
})

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
  console.log(`Server running at: http://localhost:${port}/`)
})
