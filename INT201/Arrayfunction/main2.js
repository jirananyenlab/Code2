const students = [
    { id: 1, firstname: "somsak", lastname: "Jaidee" },
    { id: 2, firstname: "somchai", lastname: "Dee" },
    { id: 3, firstname: "somying", lastname: "jai" },
  ];
  
  const jaiStudents = students.filter((student) =>
    student.lastname.toLowerCase().startsWith("jai")
  );
  console.log(jaiStudents);
  
  //students who has firstname or lastname include 'de' with case in sensitive
  const deStudents = students.filter(
    (student) =>
      student.firstname.toLowerCase().includes("de") ||
      student.lastname.toLowerCase().includes("de")
  );
  console.log(deStudents);
  
  const ids = students.map((student) => student.id)
  console.log(ids)
  
  //return student fullname , fullname format is 'lastname, firstname'
  const fullnames = students.map((student) => `${student.lastname}, ${student.firstname}`)
  console.log(fullnames)
  
  //return all student ids in the format current year follows with student id , for examples
  //{ id : 1 , firstname : 'somsak' , lastname : jaidee} => 20231
  const newIds = students.map((student) => {
    const currentYear = new Date(Date.now()).getFullYear()
    return currentYear
    }
  )