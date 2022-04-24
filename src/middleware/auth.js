const jwt = require("jsonwebtoken")
const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    try {
        let token = req.headers["x-auth-token"]
        if (token) {
            next()
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    try {
        let token = req.headers["x-auth-token"]
        let decode = jwt.verify(token, "secret-this")
        let logged = decode.userId
        let user = req.params.userId
        if (logged != user) {
            res.status(400).send({ msg: "token not validated" })
        }
        else { next() }
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.authenticate = authenticate;
module.exports.authoriser = authorise