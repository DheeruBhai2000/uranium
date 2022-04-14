const mongoose=require('mongoose')

let auther= new mongoose.Schema({
    author_id:Number,
    author_name:String,
    age:Number,
    address:String
},{timestamps:true})

module.exports=mongoose.model('Auther',auther)