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
const st2 = new Student(12,'Gode' , 'Eiei')
console.log('st1');
console.log(st1); //Student { id: 11, fristname: 'Lodchong', lastname: 'Eiei' }
console.log(st1.fristname); //Lodchong
console.log(st1.getFullname()); //Lodchong Eiei

console.log();
console.log('st2');
console.log(st2); //Student { id: 11, fristname: 'Lodchong', lastname: 'Eiei' }
console.log(st2.fristname); //Lodchong
console.log(st2.getFullname()); //Lodchong Eiei

console.log(Student.prototype.isPrototypeOf(st2)); //true
console.log(Object.prototype.isPrototypeOf(st1));  //true