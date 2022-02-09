arr1=[10,20,30,40]
arr2=[11,20,30,31]
var p1=0,p2=0
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log(arr1[p1])
        p1++
        p2++

    }
    else if(arr1[p1]<arr2[p2]){
        p1++
    }
    else{
        p2++
    }
}