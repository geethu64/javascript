// arraymethods
//Filter()-codtion method used filter
var arr=[10,9,11,8,12]
//1.even
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);
//2.odd
// var odds=arr.filter(num=>num%2!=0)
//  console.log(odds);
//3.num>5
var grt=arr.filter(num=>num>5).sort((n1,n2)=>n2-n1)
console.log(grt);
