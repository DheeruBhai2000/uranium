const { default: mongoose } = require("mongoose");

let productSchema=new mongoose.Schema({
    pdName:String,
    category:String,
    price:{type:Number,require:true}
},{timestamps:true})

module.exports=mongoose.model("product",productSchema)