const students = [
    { name: "Student1", age: 10 },
    { name: "Student2", age: 15 },
    { name: "Student3", age: 20 },
    { name: "Student4", age: 25 },
    { name: "Student5", age: 30 },
  ];
  
  const filteredStudents = students.filter(student => student.age >= 20);
  
  console.log(filteredStudents);