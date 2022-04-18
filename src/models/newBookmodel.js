const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;
// const ref=mongoose.Types.ref

let newBookSchema=new mongoose.Schema({

    bookName :String,
    auther:{type:ObjectId,ref:'newAuther'},
    price :Number,
    rating:Number,
    publisher:{type:ObjectId,ref:"newpublisher"},
    isHardCover:{type:Boolean,default:false},
    year:Number
},{timestamps:true})

module.exports=mongoose.model('newBoook',newBookSchema)