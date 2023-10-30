let student = {id:1, name: 'Joe'}
let newstudent = {id:2, name: 'Joe'}
let old = {id:1, name: 'Joe'}
const alu = student

console.log(student==old); //false
console.log(student===old); //false

console.log(student==alu); //true
console.log(student===alu);  //true

const circle = {
    radius: 2 ,
    area() {
        return Math.PI * Math.pow(this.radius,2)
    },
    equals(newcircle){                         // equals(newcircle){   
        return this.radius===newcircle.radius  //return this.radius===newradius  } ไม่ได้
    }
}
console.log(circle.equals({radius:3})); //false
console.log(circle.equals({radius:2})); //true

