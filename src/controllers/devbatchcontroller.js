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
    let fetch=await developermodel.find({gender:"female",percentage:{$gte:70}})
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
module.exports.createbatch=createbatch
module.exports.createdev=createdev
module.exports.scholar=scholar
module.exports.percentage=percentage