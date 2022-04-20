const usermodel=require("../models/userModel")
const productmodel=require("../models/product")
const ordermodel=require("../models/order")


let creteuser=async function(req,res){
    let data=req.body;
    let free=req.headers.isfreeappuser
    if(free){
            let saved =await usermodel.create(data)
    res.send({msg:saved})
    }else{
        res.send("missing header ,header is mandatory")
    }
}

let createproduct=async function(req,res){
    let data=req.body;
    let saved=await productmodel.create(data)
    res.send({msg:saved})
}


let createorder=async function(req,res,next){
    let data=req.body.userid
    let data1=req.body.productid



    
    // let head=req.headers.isfreeappuser
    // if (data&&data1){
    //     if(head){
    //             next()
    //     }else{
    //         res.send("error")
    //     }
    // }else{
    //     res.send("userid or product id not available")
    // }
    // let saved=await
}


module.exports.creteuser=creteuser
module.exports.createproduct=createproduct
module.exports.createorder=createorder