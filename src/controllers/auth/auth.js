// const jwt=require("jsonwebtoken")
// let auth =async function(req,res,next){
//     let token=req.headers["x-auth-token"]
//     if(!token) return res.send("token should be present")

//     let decode=jwt.verify(token,"Its-mine")
//     if(!decode) return res.send("token is invalid") 
//     next()
  
//   res.send("invalid token")
// }
// module.exports.auth=auth