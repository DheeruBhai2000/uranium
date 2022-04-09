let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
let player=function(req,res){
    let newplayer=req.body;
    let data=req.body.name;
    console.log(data)
    let change=players.find(el=>el.name===data)
    console.log(change)
    if (change==undefined){
        players.push(newplayer)
    res.send({data:players, status:true})
}else{
    res.send("The entered data is allready exist")
}
}
module.exports.player=player
