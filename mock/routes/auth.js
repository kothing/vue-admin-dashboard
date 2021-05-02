const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const auth = require('../json/auth.json')

function error (status, msg) {
  const err = new Error(msg)
  err.status = status
  return err
}

/* API url example: http://localhost:port/auth */
router.post('/', jsonParser, function (req, res, next) {
  const { username, password } = req.body || {}
  // demo data {usename: admin, password: 123}
  if (username === 'admin' && password === '123') {
    res.send(auth)
  } else {
    return next(error(400, 'Incorrect login info'))
  }
})

module.exports = router
