const mongoose=require('mongoose')

let NewBookSchema=new mongoose.Schema({
    name:String,
    author_id:Number,
    price:Number,
    ratings:Number,

},{timestamps:true})
module.exports=mongoose.model('apr13book',NewBookSchema)