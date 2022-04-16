const mongoose=require('mongoose')

let newAutherSchema=new mongoose.Schema({

        autherName:String,
        age:Number,
        address:String,
        rating:Number
},{timestamps:true})

module.exports=mongoose.model('newAuther',newAutherSchema)