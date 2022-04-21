

let commonMW=async function(req,res,next){
    let head=req.headers.isfreeappuser
        if(head){
                next()
        }else{
            res.send("Request is missing a mandatory field ")
        }
    
}

module.exports.commonMW=commonMW