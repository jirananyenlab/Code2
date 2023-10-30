const getpassingname = (student) => {
    return student.filter(a=> a.score>=70).map(a=>a.name.toUpperCase())
}
const student= [{name:'Alice',score:85} ,
    {name:'Bob',score:75},
    {name:'ken',score:55},
    {name:'Lodchong',score:95}
]
console.log(getpassingname(student));