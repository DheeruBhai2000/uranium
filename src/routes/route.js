const express = require('express');

const logger=require('../logger/logger.js');
const helper=require('../util/helper.js');
const formeetter=require('../validator/formetter.js')
const _=require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first day on  api! its good');
});
router.get('/welcome', function(req,res){
    logger.welcome();
    res.send('welcome to the function bootcamp');
});
router.get('/date',function(req,res){
    helper.date();
    res.send('hi this is current date')
});
router.get('/month', function(req, res){
    helper.month();
    res.send('the current month')
});
router.get('/info', function(req,res){
    helper.info();
    res.send('this is taday class info')
});
router.get('/hello',function(req,res){
    let months=['january','february','march','april','may','june','july','august','september','october','november','december'];
   console.log(_.chunk(months,4))
    res.send('months are divided in four groups')
})
router.get('/tail',function(req,res){
    let months=[1,3,5,7,9,11,13,15,17,19];
   console.log(_.tail(months))
    res.send('odd one is out')
})
router.get('/union',function(req,res){
    let months=[1,3,5,7,9,11,13,15,17,19];
    let months1=[1,3,5,5,7,9,2,4];
    let months2=[1,3,5,,1,1,7,5,9,88,46,45];
    let months3=[1,3,5,7,9,5,8,6,45,4,8,5];

   console.log(_.union(months,months1,months2,months3))
    res.send('odd one is out')
})
router.get('/pair', function(req, res){
    console.log(_.fromPairs([ ['horror','The Shining'],['drama','Titanic'],['thriller',"Shutter Island"],['fantasy',"Pans Labyrinth"]]
    ))
    res.send('the pairs')
});
router.get('/trim', function(req, res){
    formeetter.trim()
    res.send('the trim')
});
router.get('/upper', function(req, res){
    formeetter.trim1()
    res.send('the trim')
});

module.exports = router;
// adding this comment for no reason