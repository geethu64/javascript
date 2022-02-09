var employees=[[1000,"ram","developer",25000,1990,2005],[1001,"ravi","developer",27000,2000,2003],[1002,"raju","ba",26000,1995,2005],[1003,"nikil","mrkt",24000,2000,2007]]
//q1.print employees names only
// for (let emp of employees) {
//     console.log(emp[1]);
// var enames=employees.map(emp=>emp[1])
// console.log(enames);
    
// }
//q2.print dvlpr details
// for (let emp of employees){
//     if( emp[2]=="developer"){
//         console.log(emp);
//     }
// }
// employees.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp))
// console.log(develpers);
//q3.print deatils of develpers who is taking salary>26k
// for(let emp of employees){
//     if(emp[2]=="developer" & emp[3]>26000){
//         console.log(emp);

//     }
// }
// employees.filter(emp=>emp[2]=="developer" &  emp[3]>26000).forEach(emp=>console.log(emp))
//q4.experience of each employees
// for(let emp of employees){
//         exp=emp[5]-emp[4]
//             console.log(exp);
    
//         }
var h_exp=employees.reduce((emp1,emp2)=>emp1[5]-emp1[4]>emp2[5]-emp2[4]?emp1:emp2)
console.log(h_exp);
// var exp=employees.map( emp=>[emp[1],(emp[5]-emp[4])])
// console.log(exp);
//print details of nikhil
// for(let emp of employees){
//     if(emp[1]=="nikil"){
//         console.log(emp);
//     }
// }
// employees.filter(emp=>emp[1]=="nikil").forEach(emp=>console.log(emp))
//is there any employee work as ba
// for(let emp of employees){
//         if(emp[2]=="ba"){
//             console.log(true);
//         }
//     }
//employees.filter(emp=>emp[2]=="ba").forEach(emp=>console.log(emp))
//sort employees based on their salary in desc order
// employees.sort((emp1,emp2)=>emp2[3]-emp1[3])
// console.log(employees);
//sort employees based on their exp in asc
// employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-emp2[5]-emp2[4])
// console.log(employees);
//print details of employee who is taking highest salary
// var sal_emp=employees.reduce((emp1,emp2)=>emp1[3]>emp2[3]?emp1:emp2)
// console.log(sal_emp);
// var minsal_emp=employees.reduce((emp1,emp2)=>emp1[3]<emp2[3]?emp1:emp2)
// console.log(minsal_emp);