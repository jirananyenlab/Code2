const student = [{id:1 , name:'John Lee'},{id:2 , name:'adum Ji'} , {id:3 , name:'Adum Ji'}]
const sortIDasc = (student) => student.sort((id1,id2) => id1.id - id2.id)
const sortIDdes = (student) => student.sort((id1,id2) => id2.id - id1.id)

console.log(sortIDdes(student));

const sortNameasc = (student) => student.sort((name1,name2) => name1.name.localeCompare(name2.name))
const sortNamedes = (student) => student.sort((name1,name2) => name2.name.localeCompare(name1.name))

console.log(sortNamedes(student));