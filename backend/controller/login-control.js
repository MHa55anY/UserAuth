const { auth } = require("./mailer")

//Control for login form
function login(req, res) {
    res.render('login')
    
}

//Verify Credentials
function verify(req, res) {
    res.render('verify')
    auth(req,res)
}

module.exports = {login,verify}
