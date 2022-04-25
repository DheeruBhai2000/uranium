let calculat=function(){
    arr=[5,5,5,5,5]
    let n=arr.length;
        let min=arr[0];
        let max=arr[0];
        let sumMax=0;
        let sumMin=0;
        let same=0
        for(let i=0;i<n;i++){
            if(arr[i]>max){
                max=arr[i];
            }else if(arr[i]<min){
                min=arr[i]
            }
        }if(max===min){
            for (let i=0;i<n-1;i++){
                same+=arr[i];
            }
            console.log(same+" "+same)
            // console.log(max+" "+min)
        }else{
        for(let i=0;i<n;i++){
            if(arr[i]>min){
                sumMax+=arr[i]
            } if(arr[i]<max){
                sumMin+=arr[i]
            }
        }
        console.log(sumMin+" "+sumMax)
    }}

module.exports.calculat=calculat
