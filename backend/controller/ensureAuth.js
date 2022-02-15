//Verify OTP and ensure single session of user

const { otp } = require("./mailer");
const model = require("./sessionHandle");


function ensureAuth(req,res) {
    //If entered otp is equal to generated otp then pass verification
    if (req.body.otp == otp) {
        const sessionCount = model.count({},(err,data) => {
            
            if(data>0){
                res.render('result', {status: true})
            }else {
                req.session.isAuth = true
                res.render('result', {status: false})
                
            }

        })
    }
        
    else{
        res.redirect('/login')
    }

}
        
        



module.exports = ensureAuth