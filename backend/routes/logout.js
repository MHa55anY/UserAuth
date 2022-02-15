//Handler for logout route
const express = require('express')
const logoutHandle = require('../controller/logout-control')
const router = express.Router()

router.post('/', logoutHandle)

module.exports = router