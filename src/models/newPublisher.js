const mongoose=require('mongoose')


let newPublisher=new mongoose.Schema({

    publisherName:String,
    headQuater:String
},{timestamps:true})

module.exports=mongoose.model('newpublisher',newPublisher)