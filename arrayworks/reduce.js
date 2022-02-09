//array method
//reduce()-
var arr=[10,9,11,8,12,2,3,4,5]
// var sum=arr.reduce((n1,n2)=>(n1+n2))
// console.log(sum);
//maximum
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);