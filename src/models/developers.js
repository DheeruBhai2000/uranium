const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId


let developerSchema=new mongoose.Schema({


developerName:String,
gender:{type:String,enum:['female','male','other']},
percentage:Number,
batch:{type:ObjectId,ref:"batches"}

},{timestamps:true})
module.exports=mongoose.model('developers',developerSchema)