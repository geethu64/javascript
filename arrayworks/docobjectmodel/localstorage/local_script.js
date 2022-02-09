//local stroage:memmory strg of brwsr
//username:"luminar"
//password:"abc123"
//token:"abc123"

//1.loacal storage value added mthod


//loaclStorage.setItem(key,value)
//var localStorage={
 //   setItem(key,value)
//}
 //localStorage.setItem("username","luminar")
//localStorage.setItem("password","abc123")
//localStorage.setItem("token","abc123")


//2. fetching data from local storage

// var uname=localStorage.getItem("username")
// console.log(uname);
// var pwd=localStorage.getItem("password")
// console.log(pwd);
// var tkn=localStorage.getItem("token")
// console.log(tkn);

//3.chking for a key is exist in localstorage


// if("refreshtoken" in localStorage){
//     console.log("exist");
// }
// else{
//     console.log("not exist");
// }
// if("username" in localStorage){
//     console.log("exist");
// }
// else{
//     console.log("not exist");
// }

//4.removing a specific key,value from ls

// localStorage.removeItem("username")
//localStorage.removeItem("token")

//5.clearing local storage
//rmving all keyvalue pair

//localStorage.clear()

// var product={

//     p_name:"orange",
//     mrp:60,
//     avl_qty:10
// }
//JSON --java script object notaion
 //localStorage.setItem(product.p_name,JSON.stringify(product))
//  let apple_detail=JSON.parse(localStorage.getItem("apple"))
// console.log(apple_detail);


function addToLs(){
    let product_name=pname.value;
    let price=amount.value;
    let avl_qty=qty.value;
    let product={
        product_name,
        price,
        avl_qty
    }
    localStorage.setItem(product_name,JSON.stringify(product))

}