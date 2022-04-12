const bookmodel=require('../book/bookmodel')

let createbook=async function(req,res){
    let data=req.body;
    let saveddata= await bookmodel.create(data)
    console.log(data);
    res.send({msg:saveddata})
} 

module.exports.createbook=createbook