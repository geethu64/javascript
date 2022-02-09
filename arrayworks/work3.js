 var products=[
    [1000,"wheatpowder",45,15,0],
    [1001,"ricepowder",30,10,0],
    [1002,"goodday",40,50,0],
    [1003,"oreo",40,0,0],
    [1004,"fiftyfifty",20,20,5],
    [1005,"darkfantasy",50,0,0],

]

// (q1)print number of items in this shop
//console.log(products.length);

// (q2)print names of items available inthis shop

// var itemnames=products.map(pdt=>pdt[1])
// console.log(itemnames);

// (q3)print names of out of stock product

// var pdt_names=products.filter(pdt=>pdt[3]==0).map(pdt=>pdt[1])
// console.log(pdt_names);

// (q4)print names of product in 30 -50 range
var pdt_names=products.filter(pdt=>(pdt[3]>=30) && (pdt[3]<=50)).map(pdt=>pdt[1])
console.log(pdt_names);

//  (q5)print low cost product
// var low_cost=products.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2)
// console.log(low_cost);



// (q6) print costly product


// var high_cost=products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
// console.log(high_cost);

// (q7)sort products based on aval_qty


// var aval_qty=products.map(pdt=>pdt[3]).sort((n1,n2)=>n1-n2)
// console.log(aval_qty);
