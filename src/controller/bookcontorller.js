const bookmodel=require('../book/bookmodel')

let createBook=async function(req,res){
    let data=req.body;
    let saveddata=await bookmodel.create(data);
    res.send({msg:saveddata})
};

let bookList=async function(req,res){
    let allbook= await bookmodel.find().select({bookName:1,autherName:1,_id:0,year:1})
    res.send({msg:allbook})
};

let getBooksInYear=async function(req,res){
    let year1=req.body.year
    let yearboook= await bookmodel.find({year:year1})
    res.send({msg:yearboook});
};

let getParticularBooks= async function(req,res){
    let condition=req.body;
    let result=await bookmodel.find(condition)
    res.send({msg : result})
};

let getXINRBooks= async function(req,res){
    let price1=await bookmodel.find({'price.indian':{$in:["100INR","200INR","500INR"]}})
    res.send({msg:price1});
};

let getRandomBooks=async function(req,res){
    let random= await bookmodel.find({$and:[{stockAvailable:true},{pages:{$gt:500}}]})
    res.send({msg:random})
}

module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks