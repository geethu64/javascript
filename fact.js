var num=5
if(num<0){
    console.log("error")
}
else if(num==0){
    console.log("fact of 0 is 1")
}
else{

    let fact=1
    for(let i=1;i<=num;i++){
    fact=fact*i
    }
    console.log(fact)
}