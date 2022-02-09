var stock_details=[
    {item_name:"tomatto",mrp:60,purchase_rate:40,aval_qty:50},
    {item_name:"onion",mrp:50,purchase_rate:30,aval_qty:60},
    {item_name:"brinjal",mrp:40,purchase_rate:25,aval_qty:10},
    {item_name:"carrot",mrp:80,purchase_rate:65,aval_qty:0},
    {item_name:"potatto",mrp:65,purchase_rate:45,aval_qty:0},
    {item_name:"chilly",mrp:40,purchase_rate:20,aval_qty:10},

]


// print total number of available items
var avl_items=stock_details.filter(itm=>itm.aval_qty>0).map(item=>item.aval_qty).length
// console.log(avl_items);


// print out of stock item details
var out_stk=stock_details.filter(avl_qty=>avl_qty.aval_qty==0)
//  console.log(out_stk);


// print costly item detail
var high_cost=stock_details.reduce((n1,n2)=>n1.mrp>n2.mrp?n1:n2)
//  console.log(high_cost);


// print low cost item detail
var low_cost=stock_details.reduce((n1,n2)=>n1.mrp<n2.mrp?n1:n2)
//  console.log(low_cost);

// sort products bsed on avl_qty
var avl_qty=stock_details.map(pdt=>pdt.aval_qty).sort((n1,n2)=>n1-n2)
// console.log(avl_qty);
 // is ther any item below rs 25
 var itm=stock_details.some(pchs_rate=>pchs_rate.mrp<25)
console.log(itm);

// print details of potatto
var details=stock_details.find(itm=>itm.item_name=="potatto")
// console.log(details);