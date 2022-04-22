const usermodel=require("../models/newusermodel")
const jwt=require("jsonwebtoken");
const { mkcol } = require("../routes/route");
let register=async function(req,res){
    let data=req.body;
    let saved=await usermodel.create(data);
    res.send({status:true,msg:saved})
};

let login=async function(req,res){
    let email=req.body.emailId;
    let pass=req.body.password;
    let user=await usermodel.findOne({emailId:email,password:pass});
    if(!user) return res.send("User does not exist")

    let token=jwt.sign({userId:user._id.toString()},"Its-mine")
    res.send({status:true,msg:token})
}   
let getdata=async function(req,res){
    let data=req.params.userId
    let token=req.headers["x-Auth-token"]
    if (!token) token=req.headers["x-auth-token"]

    if (!token) return res.send({staus:false,msg:"token must be present"})

    let decode=jwt.verify(token,"Its-mine")
    if (!decode) return res.send({status:false,Msg:"token is invalid"})
    
    let userDetails=await usermodel.findById(data)
    if (!userDetails) return res.send("no such user exists")

    res.send({status:true,msg :userDetails})
}

let update=async function(req,res){
    let token =req.headers["x-auth-token"]
    if (!token) token=req.headers["xAuth-token"]
    if (!token) return res.send("token must be present")

    let decode=jwt.verify(token,"Its-mine")
    if (!decode) return res.send("token is invalid")

    let data= req.params.userId
    let update =req.body
    let user=await usermodel.findByIdAndUpdate({_id:data},{$set:update},{new:true})//.upsert(update,{new:true})
    // let user=await usermodel.findById(data).upsert(update)
    // let user=await usermodel.find.upsert(data,update)//.upsert(update)
    if (!user) return res.send("user does not exist")

    res.send({status:true,msg:user})
};

let deleteser=async function(req,res){
    let token=req.headers["x-auth-token"]
    if(!token) return res.send("token should be present")

    let decode=jwt.verify(token,"Its-mine")
    if(!decode) return res.send("token is invalid")

    let userid=req.params.userId
    let update=req.body
    let user=await usermodel.findOneAndUpdate({_id:userid},{$set:update},{new:true})
    if (!user) return res.send("no user exist")
    res.send({msg:user})
}


module.exports.register=register
module.exports.login=login
module.exports.getdata=getdata
module.exports.update=update
module.exports.deleteser=deleteser