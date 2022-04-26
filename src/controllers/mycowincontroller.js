const axios = require("axios")
let getStates = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/states`
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    } catch (err) {
        res.status(500).send(err.message)
    }
};

let getOtp = async function (req, res) {
    try {
        let no = req.body;
        let options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: no
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
};
let getDistricts = async function (req, res) {
    try {
        let district_id = req.query.district_id;
        let date = req.query.date;
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options);
        res.status(200).send(result.data)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
};

let wather = async function (req, res) {
    try {
        // let wether = req.query.q;
        let key = req.query.key;
        let newcity = [];
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        for (let i = 0; i < cities.length; i++) {
            let obj={city:cities[i]};
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
            }
            let result = await axios(options);
            // newcity.city=cities[i]
            obj.temp=result.data.main.temp
            console.log(obj)
            newcity.push(obj)
            // newcity.push(newcity.city=cities[i],newcity.temp=result.data.main.temp)
        }
        // console.log(newcity)
        let sorted=newcity.sort(function(a,b){return a.temp-b.temp})
        res.status(200).send(sorted)

        // res.status(200).send(result.main.data)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}
let meme = async function (req, res) {
    try {
        let id = req.query.template_id;
        let text = req.query.text0;
        let text2 = req.query.text1
        let usname = req.query.username;
        let pass = req.query.password
        let options = {
            method: 'post',
            // method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text}&text1=${text2}&username=${usname}&password=${pass}`,
            data: "hi"
        }
        let result = await axios(options);
        // console.log(result)
        res.status(200).send(result.data)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.meme = meme
module.exports.wather = wather
module.exports.getDistricts = getDistricts
module.exports.getOtp = getOtp
module.exports.getStates = getStates