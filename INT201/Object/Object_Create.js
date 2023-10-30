class Student{
    constructor(id,fn,ln) {
        this.id = id
        this.fristname = fn
        this.lastname = ln
    }
    getFullname(){
        return `${this.fristname} ${this.lastname}`
    }
}
const st1 = new Student(11,'Lodchong' , 'Eiei')

const undergratSt1 = Object.create(st1)
console.log(undergratSt1); //{}
console.log(undergratSt1.fristname); //Lodchong

console.log(Object.prototype.isPrototypeOf(undergratSt1)); //true
console.log(Student.prototype.isPrototypeOf(undergratSt1)); //true

undergratSt1.Object='Web Application'
console.log(undergratSt1);  // Student { Object: 'Web Application' } แสดงแค่ของตัวเองที่สร้าง  ถ้าของคนอื่นจะไม่แสดง   แต่มีอยู่จริง สมาตรเรียกใช้งานได้  ex undergratSt1.fristname

