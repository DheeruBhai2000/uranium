const mongoose=require('mongoose')

let batchesSchema=new mongoose.Schema({

batchName:String,
size:Number,
programe:{type:String,enum:['backend','frontend']},

},{timestamps:true})
module.exports=mongoose.model('batches',batchesSchema)