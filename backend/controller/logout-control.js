// Handler for logging out other instances of user on other browsers


function logoutHandle (req,res) {
    req.session.destroy((err) => {
        if (err) throw err;
        res.render("result", {status: false})
    })
}

module.exports = logoutHandle