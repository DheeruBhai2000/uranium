

const jwt=require("jsonwebtoken")
const usermodel=require("../models/userModel")


let createUser=async function(req,res){
    let data=req.body
    let saved=await usermodel.create(data)
    res.send({msg:data})
 }

 let login=async function(req,res){
     let email=req.body.emailId
     let pass=req.body.password
     let user=await usermodel.findOne({emailId:email,password:pass})
     if (!user)
         return res.send({status: false, msg: "username or the password is not corerct"});

let token= jwt.sign({userId:user._id.toString()},"functionup-uranium")
res.setHeader("x-auth_token",token)
 res.send({staus:true,data:token})
 }

 let userData=async function(req,res){
     let token =req.headers['x-Auth-token']
     if (!token) token=req.headers['x-auth-token']
     if(!token) return  res.send({staus:false,msg:"token is not in headers"})
     console.log(token)

     let decodedToken= jwt.verify(token,"functionup-uranium")
     if(!decodedToken) return res.send("code is invalide")

     let userid=req.params.userId
     let details=await usermodel.find({userid})
     if (!details) return res.send({status:false,msg:"no user exist"})

     res.send({staus:true,data:details})
 };

 let updatedUser=async function(req,res){
     let token =req.headers["x-Auth-token"]
     if (!token) token=req.headers["x-auth-token"]
     if(!token) return res.send({staus:false,msg:"token not in heder"})
     console.log(token)

     let decodedToken=jwt.verify(token,"functionup-uranium")
     if(!decodedToken) return res.send("token is invalid")

     let userid=req.params.userId
     let user=await usermodel.findById(userid)
     if(!user) return res.send("no user exists")

     let userData=req.body
     let updatedUser=await usermodel.findOneAndUpdate({_id:userid},userData)
     res.send({status:updatedUser,data:updatedUser});
 }

//  let tokavalidat=await function(req,res){

//  }
 module.exports.createUser=createUser
 module.exports.loginUser=login
 module.exports.getUserData=userData
module.exports.updatedUser=updatedUser