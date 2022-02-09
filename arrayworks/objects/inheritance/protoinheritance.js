var baleno={
    manufacture_name:"nexa",
    color_varients:["blue","white","red"],
    varients:["petrol","diesel"],
    price:"8l",
    transmission_types:["manuel"],
    getColor(){
        console.log("available color"+this.color_varients);
    },
    getPrice(){
        console.log("onroad price="+this.price);
    }

}
var glanza={
    manufacture_name:"toyotta",
    color_varients:["black","gray","coffebrown"],
    transmission_types:["manuel","auto"],

}
glanza.__proto__=baleno
//  console.log(glanza.manufacture_name);
//  glanza.getPrice()
glanza.getColor()