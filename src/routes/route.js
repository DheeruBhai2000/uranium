const express = require('express');

const logger=require('./logger.js');
const _=require('lodash');
const router = express.Router();

//,,,,,,,, Updated upstream
router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})
//==========
router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
})
router.post('/test-me', function (req, res) {
    console.log(req.query.name)
    res.send('My first day on  api! its good');
    router.get()
//>>>>>>> Stashed changes
});
// soluton of canidates name
router.get('/all-canidates',function(req,res){
    let canidates=['Dheearj','Manish','Alok','Sonu','sourabh'];
    res.send(canidates);
}) ;
// soluton of canidates count
router.get('/canidates',function(req,res){
    console.log(req.query.count);
    res.send(req.query.count);
});
// soluton of assignment que 1..==============

router.get('/movies', function(req,res){
    let movies=['The Shining','Incedies','Rang de basanti','Finding Nemo']
    res.send(movies)
})
// soluton of assignment que 2..==============
router.get('/movies/:indexNumber', function (req,res){
    let movies=['The Shining','Incedies','Rang de basanti','Finding Nemo']
    for(let i=0;i<movies.length;i++){
// soluton of assignment que 3..==============
// handeling edge case==========
if (req.params.indexNumber!==i){
    var mov='sorry you entered wrong input'
}
//=================================
    if(req.params.indexNumber==i){
    mov=movies[i]
   console.log(mov)
}
    }
    res.send(mov)

});
// soluton of assignment que 4..==============
router.get('/films', function(req,res){
    let arr=[ {
        id: 1,
        "name": "The Shining"
       }, 
       {
        id: 2,
        "name": "Incendies"
       },
        {
       id: 3,
        "name": "Rang de Basanti"
       }, 
       {
        id: 4,
        "name": "Finding Nemo"
       }];
       res.send(arr);
});
// soluton of assignment que 5..==============
router.get('/films/:filmId', function(req,res){
    let arr1=[ {
        id: 1,
        "name": "The Shining"
       }, 
       {
        id: 2,
        "name": "Incendies"
       },
        {
       id: 3,
        "name": "Rang de Basanti"
       }, 
       {
        id: 4,
        "name": "Finding Nemo"
       }];
    //    for(let i=0;i<arr.length;i++){
    //    let film=arr.filter(req.query.params==i.id)
       for(let i=0;i<arr1.length;i++){
            // if (req.params.filmId!=arr1[i].id){
            //     var film="No movie exists with this id"
            // }
            if (req.params.filmId==arr1[i].id){
                var film=arr1[i]
                console.log(film)
                // break;
            }//else{
            // const de="No movie exists with this id"
            // }
       }
       res.send(film)
    //    res.send(de)
});

router.get('/hello',function(req,res){
    let months=['january','february','march','april','may','june','july','august','september','october','november','december'];
  let mon= (_.chunk(months,4))
    res.send(mon)
});


module.exports = router;
// adding this comment for no reason