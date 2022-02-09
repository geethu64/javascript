var pattern="ABABBAA"
var wc_out={}
var out=[]
// for(let char of pattern){
//     if(char in wc_out ){
//     out.push(char)}
//     else{
//         wc_out[char]=1
//     }
//     // console.log(fst);
//     }
// console.log(out[0]);

 Array.from(pattern).map(char=>char in wc_out?out.push(char):wc_out[char]=1)  
 console.log(out[0]); 
 for(let prop in pattern){
     
 }



