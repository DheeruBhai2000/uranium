const usermodel=require("../models/userModel")
const productmodel=require("../models/product")
const ordermodel=require("../models/order")


let creteuser=async function(req,res){
    let data=req.body;
    // let free=req.headers.isfreeappuser
    // if(free){
            let saved =await usermodel.create(data)
    res.send({msg:saved})
    // }else{
    //     res.send("missing header ,header is mandatory")
    // }
}

let createproduct=async function(req,res){
    let data=req.body;
    let saved=await productmodel.create(data)
    res.send({msg:saved})
}


let createorder=async function(req,res,next){
    let order=req.body
    let data=req.body.userid
    let data1=req.body.productid
    let head=req.headers.isfreeappuser
    let product=await productmodel.find({$in:{_id:data1}})
    let user=await usermodel.findById(data)
    let paid=req.headers.amount
    let needamt=await usermodel.find({_id:data}).select({amount:1})
    if(data&&data1){
        if(product&&user){
                if(head){
                    let saved=await ordermodel.create(order)
                // req.body["isFreeAppUser"]=true
                    // let fnsave=await ordermodel.findOneAndUpdate({_id:saved._id,$set:{amount:0}})
                    res.send({msg:saved})
                }else if(paid>=needamt){
                    let saved=await ordermodel.create(order)
                    res.send({msg:{saved}})
                }else{res.send("eroor")}
    
        }else{
            res.send("user or product no exist")
        }
    }else res.send("ids not exist")
    // res.send("done with code")

}
    
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


module.exports.creteuser=creteuser
module.exports.createproduct=createproduct
module.exports.createorder=createorder