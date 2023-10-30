const students = [
    {
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    } ,
    {
        name: 'Lodchong',
        attendance: [false, false, false, false, false],
        testScores: [50, 58, 55, 50, 52]
    }
]
 /*function getAttendenceRate(student) {   
     return student.reduce((name,curr) => {
        if ((curr.attendance.filter(a=>a===true).length/5)*100 < 80) {
        name.push(curr)
     }
     return name
    }
     ,[])
 }*/

 //รับ student ทั้งหมด
  function getAttendenceRate(student) {   
    student.forEach(e =>  {
      e.attendance  = ( e.attendance.filter(a=>a===true).length/5)*100 
      return e.attendance
        }
    );
}
function getAvgScore(student) {   
     student.forEach(e =>  {
        e.testScores = (e.testScores.reduce((sum,curr) => sum + curr,0))/5
     return  e.testScores
         }
      );
}
function UnderPerformStudent(students) { 
    getAttendenceRate(students)
    getAvgScore(students)
return students.filter(e => e.attendance < 80 && e.testScores < 70); 
}


console.log(UnderPerformStudent(students)); 
console.log(students);
