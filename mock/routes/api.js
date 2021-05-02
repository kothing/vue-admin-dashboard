const express = require('express')
const router = express.Router()

const apiKeys = ['foo', 'bar', 'baz']
const users = require('../json/users.json')
const repos = require('../json/repos.json')
const userRepos = require('../json/userRepos.json')

function error (status, msg) {
  const err = new Error(msg)
  err.status = status
  return err
}

// Route prefix '/api'

router.get('/', function (req, _res, next) {
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
router.get('/users', function (_req, res, _next) {
  res.send(users)
})

/* API url example: http://localhost:port/api/repos/?api-key=foo */
router.get('/repos', function (_req, res, _next) {
  res.send(repos)
})

/* API url example: http://localhost:port/api/user/tobi/repos/?api-key=foo */
router.get('/user/:name/repos', function (req, res, next) {
  const name = req.params.name
  const user = userRepos[name]
  if (user) {
    res.send(user)
  } else {
    next()
  }
})

module.exports = router
