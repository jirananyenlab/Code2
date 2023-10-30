const student = { id: 645000101, name: 'Somchai Jaidee' }
const { id: studentId } = student
let { name: studentName } = student
console.log(studentId) //645000101
console.log(studentName)//Somchai Jaidee
studentName = 'John'
console.log(studentName) //John
console.log(student.name) //Somchai Jaidee

function doSomething({ id: studentId }) { //const { id: studentId } = student เปลี่ยนชื่อ
  return studentId
}
console.log(doSomething(student)) //645000101

