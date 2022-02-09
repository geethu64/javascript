// arraymethods
//find()
var employees=[[1000,"ram","developer",25000,1990,2005],
[1001,"ravi","developer",27000,2000,2003],
[1002,"raju","ba",26000,1995,2005],
[1003,"nikil","mrkt",24000,2000,2007]]
var emp_details=employees.find(emp=>emp[1]=="nikil")
console.log(emp_details);