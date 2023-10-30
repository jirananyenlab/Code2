//destructoring
function arrayAdd1([x1], [,y1]) {
    return x1 + y1 // 5 + 7
  }
  const a = [5, 8]
  const b = [2, 7]
  console.log(arrayAdd1(a, b)) // 12

  const person = [
    {
      id:000,
        name: 'Sophia',
        attendance: [true, true, false, true, true],
        testScores: [88, 92, 85, 78, 90]
    },
    {
      id:001,
        name: 'Mason',
        attendance: [true, true, true, true, false],
        testScores: [70, 82, 88, 75, 62]
    },
    {
      id:255,
        name: 'Isabella',
        attendance: [true, false, false, true, true],
        testScores: [68, 71, 70, 60, 78]
    },
    {
      id:558,
        name: 'Liam',
        attendance: [true, true, true, true, true],
        testScores: [90, 87, 92, 88, 95]
    },
    {
      id:58,
        name: 'Olivia',
        attendance: [true, true, true, true, false],
        testScores: [72, 78, 75, 80, 62]
    },
    {
      id:881,
        name: 'Lodchong',
        attendance: [false, false, false, false, false],
        testScores: [50, 58, 55, 50, 52]
    }
]

let getIdandName = function ([,,{id:idpersonThree,name:namepersonThree}]) {
  return idpersonThree + " " + namepersonThree
}
console.log(getIdandName(person));