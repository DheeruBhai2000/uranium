const jwt=require("jsonwebtoken")
let auth =async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(!token) return res.send("token should be present")

    let decode=jwt.verify(token,"Its-mine")
    if(!decode) return res.send("token is invalid") 

    let logged =decode.userId
    let user=req.params.userId
    if(logged!=user) return res.send({status:false,msg:"user not allowed"})

    next()
  
//   res.send("invalid token")
}
module.exports.auth=auth