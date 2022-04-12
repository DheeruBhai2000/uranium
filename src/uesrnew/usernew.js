const mongoose = require('mongoose')

let user1Schema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type:String,
        unique:true,
        required:true
    },
    gender:{ type:String,
        enum:["Male","Female","others"]
    },
     age:{type:Number,
        required:true
    },
     dob:{type:String,
        required:true}

},{timestamps:true})

module.exports=mongoose.model('usernew',user1Schema)