const express = require('express')
const hasAccess = require('../controller/access')
const ensureAuth = require('../controller/ensureAuth')
const router = express.Router()
const {login, verify} = require('../controller/login-control')
const {auth, otp} = require('../controller/mailer')




router.get('/', login)

router.post('/verify', verify)

router.post('/verify/result',ensureAuth)



module.exports = router