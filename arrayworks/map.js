//array methods 
//map()-corresponding output object generated
var arr=[10,9,11,8,12,2,3,4,5]
//cubes
// var cubes=arr.map(num=>num**3)
// console.log(cubes);
//if n>5 n+1if n<5 n-1 if n==5 num
var grt=arr.map(num=>num>5?num+1:num<5?num-1:num)
console.log(grt);
