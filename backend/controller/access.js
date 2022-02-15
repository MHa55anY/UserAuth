//Ensure user is logged in to access the particular URL

function hasAccess(req,res,next) {
    if (req.session.isAuth) {
        next()
    }
    else {
        res.redirect('/login')
    }
}

module.exports = hasAccess