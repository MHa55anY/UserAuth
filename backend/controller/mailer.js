
//Generate OTP
var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);


//OTP service handler
function auth(req,res,next){const mailjet = require ('node-mailjet')
.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "mhyyusuf3@gmail.com",
        "Name": "MH"
      },
      "To": [
        {
          "Email": req.body.email,
          "Name": "MH"
        }
      ],
      "Subject": "OTP for Login",
      "TextPart": "My first Mailjet email",
      "HTMLPart": `<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />Your OTP is ${otp}`,
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    // console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)

next()
  })}

  module.exports = {auth,otp}