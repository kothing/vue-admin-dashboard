/**
 * Database
 */
var apiKeys = ['foo', 'bar', 'baz']
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
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
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

// create an error with .status. we
// can then use the property in our
// custom error handler (Connect repects this prop as well)

function error (status, msg) {
  var err = new Error(msg)
  err.status = status
  return err
}

// if we wanted to supply more than JSON, we could
// use something similar to the content-negotiation
// example.

// here we validate the API key,
// by mounting this middleware to /api
// meaning only paths prefixed with "/api"
// will cause this middleware to be invoked

app.use('/api', function (req, _res, next) {
  var key = req.query['api-key']

  // key isn't present
  if (!key) return next(error(400, 'api key required'))

  // key is invalid
  if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'))

  // all good, store req.key for route access
  req.key = key
  next()
})

// we now can assume the api key is valid,
// and simply expose the data

// example: http://localhost:port/api/users/?api-key=foo
app.get('/api/users', function (_req, res, next) {
  res.send(users)
})

// example: http://localhost:port/api/repos/?api-key=foo
app.get('/api/repos', function (_req, res, next) {
  res.send(repos)
})

// example: http://localhost:port/api/user/tobi/repos/?api-key=foo
app.get('/api/user/:name/repos', function (req, res, next) {
  var name = req.params.name
  var user = userRepos[name]

  if (user) {
    res.send(user)
  } else {
    next()
  }
})

// example: http://localhost:port/admin/auth
app
  .route('/admin/auth')
  .all(function (_req, _res, next) {
    next()
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.send({
      access_token: 'token',
    })
  })
  .post(function (req, res, next) {
    res.send(users)
  })

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use(function (err, _req, res, _next) {
  res.status(err.status || 500)
  res.send({
    error: err.message,
  })
})

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
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
