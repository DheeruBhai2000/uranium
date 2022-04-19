const newAuther = require('../models/newAuthermodel')
const newpublisher = require('../models/newPublisher')
const newBookmodel = require('../models/newBookmodel')


let createNewAuther = async function (req, res) {
    let auther = req.body;
    let saveAuther = await newAuther.create(auther);
    res.send({ msg: saveAuther })
};


let createPublisher = async function (req, res) {
    let publisher = req.body;
    let savepublisher = await newpublisher.create(publisher);
    res.send({ msg: savepublisher })
};

let createNewBook = async function (req, res) {
    let newbook = req.body;
    let autherid = req.body.auther;
    let publisherid = req.body.publisher;
    let autherid1 = await newAuther.findOne({ _id: autherid });
    let publisherid1 = await newpublisher.findOne({ _id: publisherid })
    if (autherid && publisherid) {
        if (autherid1 && publisherid1) {
             let savedbook = await newBookmodel.create(newbook);
            res.send({ msg: savedbook })
           
        } else {
            res.send("Your entered wrong Id any of them or both does not exist")
           
        }
    } else {
        res.send("You not entered Id any one of reference or both Please enter your Id")
    }
};

let allnewbooks = async function (req, res) {
    let allbooks=await newBookmodel.find().populate(['auther','publisher'])
    // let allbooks = await newBookmodel.find().populate('auther').populate('publisher')
    // console.log(allbooks)
    res.send({ msg: allbooks })
}

let putchanges=async function(req,res){
    let data=req.body
    let changes=await newpublisher.find({publisherName:{$in :['Penguin','HarperCollins']}}).select({_id:1})
    let changes1=[]
    for (let i=0;i<changes.length;i++){
        changes1.push(changes[i]._id)
    }
    console.log(changes1)
    let update=await newBookmodel.updateMany({publisher:{$in:changes1}},{data})
    res.send({msg:update})
}

let putchangesprice=async function(req,res){
    let data=req.body
    let price=await newAuther.find({rating:{$gt:3.5}}).select({_id:1})
    console.log(price)

    let update=[];
    for(let i=0;i<price.length;i++){
        update.push(price[i]._id)
    }
    // console.log(update)
    let pricechange=await newBookmodel.updateMany({auther:{$in:update}},data,{new:true})
    res.send({msg:pricechange})
}


module.exports.createNewAuther = createNewAuther;
module.exports.createPublisher = createPublisher;
module.exports.createNewBook = createNewBook;
module.exports.allnewbooks = allnewbooks
module.exports.putchanges=putchanges
module.exports.putchangesprice=putchangesprice


