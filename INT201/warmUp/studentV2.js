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

function getAttendenceRate(attendance) {   
       return (attendance.filter(a=>a===true).length/(attendance.length) )*100 
 }

 function getAvgScore(score) { 
    
    return  (score.reduce((sum,curr) => sum + curr,0))/score.length
 } 
 
 
 function UnderPerformStudent(student) {   
 return student.filter(e => {return getAttendenceRate(e.attendance) < 80 ||   getAvgScore(e.testScores) < 70}); 
 }
 
 
 console.log(UnderPerformStudent(students)); //
 