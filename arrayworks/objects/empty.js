var employees={
    eid:101,
    ename:"anu",
    company:"luminar",
    salary:25000
}
//Q1...print employee name
console.log(employees.ename);
//Q2.. check exp prop exist if yes add 1+ current value else set exp:1
if("exp" in employees ){
    employees.exp+=1
}
else{
    employees.exp=1
}
console.log(employees);
//update emply salary 40000
employees.salary=40000
console.log(employees);