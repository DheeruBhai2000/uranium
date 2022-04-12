const mongoose=require('mongoose');
const { schema } = require('../models/userModel');

let bookSchema=new mongoose.Schema({
    bookName : String,
    autherName:String,
    category:{
        type :String,
        enum:["fiction","comic","poem","story"]
    },
    publishYear:Number,
    createdAt:Date,
    modifiedAt:Date
},{timestamps:true})
module.exports=mongoose.model('Book',bookSchema)