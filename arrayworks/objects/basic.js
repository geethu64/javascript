var student={
    name:"anu",
    rolno:101,
    course:"MCA"
}
console.log(student.name);
console.log(student.rolno);
//add values
student.gender="male"
console.log(student);
student.grade="A"
console.log(student);
//chk property gender in student
console.log("gender" in student);