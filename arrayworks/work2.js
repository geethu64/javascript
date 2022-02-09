var arr=[2,4,3,5]
//sum=6 (2,4)
//sum=7(4,3)
// var ele=9,size=arr.length,total
// //console.log(size);
// for ( let i= 0; i<size-1; i++) {
//     for (let  j= i+1; j<size; j++) {
//         if(arr[i]+arr[j]==ele){
//             console.log(arr[i],arr[j]);
//             return
//         }
        
//     }
    
// }

var ele=6,low=0,upp=arr.length-1
while(low<upp){
    let curt_total=arr[low]+arr[upp]
    if(curt_total==ele){
    console.log(arr[low] ,arr[upp]);
    break
    }
    else if(curt_total>ele)
    {
        upp--
    }
    else if(curt_total<ele)
    {
        low++
    }
}

