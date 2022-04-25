const usermodel = require("../models/userModel")
const productmodel = require("../models/product")
const ordermodel = require("../models/order")


let creteuser = async function (req, res) {
    let data = req.body;
    // let free=req.headers.isfreeappuser
    // if(free){
    let saved = await usermodel.create(data)
    res.send({ msg: saved })
    // }else{
    //     res.send("missing header ,header is mandatory")
    // }
}

let createproduct = async function (req, res) {
    let data = req.body;
    let saved = await productmodel.create(data)
    res.send({ msg: saved })
}


let createorder = async function (req, res, next) {

    let orderdetailes = req.body;
    let headers = req.headers;
    let addtype = req.headers["isFreeAppUser"]
    if (!addtype) {
        return res.status(400).send({ status: true, msg: "A mandatory field required" })
    }
    let userid = orderdetailes.userid;
    let user = await usermodel.findById(userid);
    if (!user) {
        res.status(500).send({ status: false, msg: "user does not exist" });
    }
    let productid = orderdetailes.productid;
    let product = await productmodel.findById(productid);
    if (!product) {
        res.status(500).send({ status: false, msg: "product does not exist" });
    }
    // let addtypeFree = Boolean(addtype);
    let addtypeFree = false;
    if (addtype == 'ture') {
        let addtypeFree = true;
    } 
    // scenario 1
    if (!addtypeFree && user.balance >= product.price) {
        user.balance = user.balance - product.price;
        await user.save()
        orderdetailes.amount = product.price;
        orderdetailes.isFreeAppUser = false;
        let ordercreated = await ordermodel.create(orderdetailes);
        return res.status(201).send({ status: true, data: orderdetailes });
    }else if (!addtypeFree){
        //scenario 2
            return res.send({status:false,msg:"not sufficien balance"})
    }else{
        orderdetailes.amount=0;
        orderdetailes.isFreeAppUser=true;
        let ordercreated=await ordermodel.create(orderdetailes)
        res.status(201).send({status:true,msg :ordercreated})
    }

    let createorder = await ordermodel.create(orderdetailes);
    res.status(201).send({ status: true, msg: createorder });


}
// let calculat=function(){
// arr=[5,5,5,5,5]
// let n=arr.length;
//     let min=arr[0];
//     let max=arr[0];
//     let sumMax=0;
//     let sumMin=0;
//     let same=0
//     for(let i=0;i<n;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }else if(arr[i]<min){
//             min=arr[i]
//         }
//     }if(max===min){
//         for (let i=0;i<n-1;i++){
//             same+=arr[i];
//         }
//         console.log(same+" "+same)
//         // console.log(max+" "+min)
//     }else{
//     for(let i=0;i<n;i++){
//         if(arr[i]>min){
//             sumMax+=arr[i]
//         } if(arr[i]<max){
//             sumMin+=arr[i]
//         }
//     }
//     console.log(sumMin+" "+sumMax)
// }}

// module.exports.calculat=calculat
module.exports.creteuser = creteuser
module.exports.createproduct = createproduct
module.exports.createorder = createorder