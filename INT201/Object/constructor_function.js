function Person(id,fristname,lastname){
    this.id = id
    this.fullname = `${fristname} ${lastname}`
}
const Per1 = new Person (111,'thegode' , 'eiei')
const Per2 = new Person (123,'Lodchong' , 'eiei')
console.log(Per1);
console.log(Per2);
console.log(Object.prototype.isPrototypeOf(Per2)); //true
console.log(Person.prototype.isPrototypeOf(Per2)); //true