const { default: mongoose } = require('mongoose')
const mongodb=require('mongoose')

let bookSchema=new mongoose.Schema({
    bookName:{type:String,
    require:true},
    autherName:String,
    price:{
        indian:String,
        europian:String,
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    stockAvailable:Boolean,
    pages:Number

})

module.exports=mongoose.model('apr12book',bookSchema)