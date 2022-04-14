const newbookmodel=require('../book1/newbookmodel')
const authermodel=require('../book1/authermodel')

let createNewBook=async function(req,res){
    let check=req.body;
    let checkbook=req.body.author_id;
    // console.log(checkbook)
    let checkone=await authermodel.findOne({author_id:checkbook})
    let id =checkone.author_id
    // console.log(checkone)
    // console.log(id)
    // let once =checkone.author_id
    // console.log(once)
    if(checkbook==id){
        let savedata=await newbookmodel.create(check)
        res.send({msg:savedata})
    }else{
        res.send("Id not Available book can not be created")
    }
}

let createauther=async function(req,res){
    let auther=req.body;
    let checkauther=await authermodel.create(auther)
    res.send({msg:checkauther})
};

let booklistof= async function(req,res){
    let getid=await authermodel.findOne({author_name:"Chetan Bhagat"})
    let getid1=getid.author_id
    let getid2=await newbookmodel.find({author_id:getid1})
    let getid3 =getid2.map(el=>el.name)
    // console.log(getid3)
    res.send({msg :getid3})
}   ;
let update=async function(req,res){
    let getid=await newbookmodel.findOne({name:"Two states"})
    // console.log(getid)
    let getid1=getid.author_id
    let bkn=getid.name;
    let authname=await authermodel.find({author_id:getid1}).select({author_name:1,_id:0})
    let bkname=await newbookmodel.findOneAndUpdate({name:bkn},{price:200},{new:true}).select({price:1,_id:0})
    // let getid2=await newbookmodel.findOneAndUpdate({author_id:getid1},{$set:{price:100}},{new :true})
    // let getid2=await newbookmodel.updateMany({author_id:getid1},{$set:{price:100}},{new :true})
    // let getid3 =getid2.name
    // console.log(getid3)
    // let newone =await newbookmodel.find({author_id:getid1}).select({author_name:1,price:1,_id:0})
    res.send({msg :authname,bkname})
}
let findprice=async function(req,res){
    let find=await newbookmodel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    // console.log(find)
    let find1=find.map(el=>el.author_id)
    // console.log(find1)
    let auther1=[];
    for(let i=0;i<find1.length;i++){
        let x=find1[i]
        const xyz=await authermodel.find({author_id:x}).select({author_name:1,_id:0});
        auther1.push(xyz)
    }
    res.send({msg:auther1})
}

module.exports.createNewBook=createNewBook;
module.exports.createauther=createauther
module.exports.booklistof=booklistof
module.exports.update=update
module.exports.findprice=findprice