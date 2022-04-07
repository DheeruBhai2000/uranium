let date= function printDate(){
    console.log(new Date());
}
let month= function printMonth() {
    const months=['january','february','march','april','may','june','july','august','september','october','november','december'];
    const d=new Date();
    console.log('the current month is :'+ months[d.getMonth()]);
}
let info=function getBatchInfo(){
    console.log('uranium, W3 D3, the topic for today is Nodejs module system')
}
module.exports.date=date
module.exports.month=month
module.exports.info=info