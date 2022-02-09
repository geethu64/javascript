//var arr=[2,5,4];
//o/p [9,6,7]
//[2,4,3,5]//op-[12,10,11,9]
//var arr=[2.4,3,5]
//sum=6 (2,4)
//sum=7(4,3)
var arr=[2,5,4],total=0,arr1=[]
for(let i of arr){
   total+=i
  
}

for(let i of arr){
    // console.log(total-j);
    arr1.push(total-i)
}
    console.log(arr1);

