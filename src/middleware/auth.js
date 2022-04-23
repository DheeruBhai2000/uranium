const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    try{
    let token=req.headers["x-auth-token"]
    if(!token)
    next()
}catch(err){
    res.status(400).send(err.message)
}
}

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}