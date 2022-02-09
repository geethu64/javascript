var num=3
var fla=0
if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            fla=1
            break

        }
        
        
    }
    if(fla==1){
        console.log("not prime")
    }
    else{
        console.log(" prime")
    }
}