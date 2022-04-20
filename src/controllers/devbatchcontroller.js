const batchesmodel=require('../models/batches')
const developermodel=require('../models/developers')

let createdev=async function(req,res){
    var data=req.body
    let saved=await developermodel.create(data)
    res.send({msg:saved})
}

let createbatch= async function(req,res){
    var data=req.body;
    let saved=await batchesmodel.create(data);
    res.send({msg:saved})
}


let scholar=async function(req,res){
    let data = req.query.para
    let fetch=await developermodel.find({gender:"female",percentage:{$gte:data}})
    res.send({msg:fetch})
}

let percentage=async function(req,res){
    let data=req.query.percentage
    let data1=req.query.program
    // let data1=req.query
    let batch1=await batchesmodel.find({batchName:data1}).select({_id:1})
    console.log(batch1)
    let get=await developermodel.find({batch:batch1,percentage:{$gt:data}})
    res.send({msg:get})
}

let aggregation=async function(req,res){
    // let get=await developermodel.aggregate(
    //     [
    //     {$group:{_id:"$developerName",total:{$sum:"$percentage"}}},
    //     {$sort:{toatl:-1}}
    //     ])
        // res.send({msg:get})
        res.send({msg:200})
}

let random=async function(req,res){
    console.log(req.ip,req.path,Date())
    // console.log(req.path)
    // console.log(req.ip)
    // let go=req.path
    // console.log(req.router)
//     // console.log(new Date())
//     console.log(Date())
    console.log(req.originalUrl)
//     // console.log(Date.now("yyyy-mm-dd"))

    res.sendStatus(200)
}
module.exports.createbatch=createbatch
module.exports.createdev=createdev
module.exports.scholar=scholar
module.exports.percentage=percentage
module.exports.random=random
module.exports.aggregation=aggregation