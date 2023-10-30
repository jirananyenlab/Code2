//1.crate object by literal
const student = {id:65130500010, fristname: 'Lodchong' , lastname : 'Eiei'}
console.log(typeof student);
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

console.log(Object.keys(student));// [ 'id', 'fristname', 'lastname' ] ดึง key เก็บเป็น Array
console.log(Object.values(student)); //[ 65130500010, 'Lodchong', 'Eiei' ] ดึง value เก็บเป็น Array

const lecturer = {id:1011, fristname: 'LodchongZAA' , lastname : 'Eiei'}
console.log(Object.prototype.isPrototypeOf(lecturer));

//เก็บค่าไว้เฉยๆ
const someoneID = student.id ,
      someoneName = student['fristname'] //object[key]
console.log(someoneID);
console.log(someoneName);

//dynamic concept

/*someoneID = 500 error
console.log(lecturer);*/
student.id = 10001
student['fristname'] = 'Baimon'
console.log(student.id);
console.log(student['fristname']);

console.log();
console.log('Add');
student.email = 'Ji@com'
student['price'] = 15000
console.log(student);

console.log();
console.log('Deleate');
delete student.price
console.log(student);

//nested
console.log();
console.log('nested object');
student.advisor = lecturer
console.log(student);

console.log(student['advisor']['fristname']); //LodchongZAA

student.getFullname = function() {
    return this.fristname + ' ' + this.lastname // this คือ currant Object
}

console.log(student.getFullname); // อ่านค่า value
console.log(student.getFullname());//execute function

const student2 = {  id:651, 
                    fristname: 'Thegode' , 
                    lastname : 'Eiei',
                    getFullname : function() {return this.fristname + ' ' + this.lastname } ,
                    getname(){return this.fristname}  //remove : and function
                }
console.log(student2.getFullname());
console.log(student2.getname());
