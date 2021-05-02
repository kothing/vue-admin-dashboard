const express = require('express')
const router = express.Router()
const auth = require('../json/auth.json')

/* API url example: http://localhost:port/auth */
router.get('/', function (req, res, next) {
  res.send(auth)
})

module.exports = router
