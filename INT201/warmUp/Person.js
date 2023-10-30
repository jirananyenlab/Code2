class Person{
    constructor(fristname,lastname,dateOfBirth){
     this.fristname = fristname
     this.lastname = lastname
     this.dateOfBirth = dateOfBirth
    }
getFullname(){
    return `${this.fristname} ${this.lastname}`
  }
getAge(){
   /*
      let currentDate = new Date()
    return currentDate.getFullYear() - this.dateOfBirth.getFullYear() 
    */
    const milliToday = Date.now()
    const milliBirthday = this.dateOfBirth.getTime()
    const diffMilli = milliToday - milliBirthday
    const dateOfDiffMili = new Date(diffMilli)
    return dateOfDiffMili.getFullYear() - 1970 //
}
isEqual(anotherPerson){
return this.fristname?.toLowerCase() === anotherPerson.fristname?.toLowerCase() && this.lastname?.toLowerCase() === anotherPerson.lastname?.toLowerCase()
}
toString(){
    return `${this.getFullname()} ${this.getAge()}`
}
}

const Per1 = new Person ('thegode' , 'eiei',new Date(2004 , 5 , 18))
const Per2 = new Person ('Thegode' , 'eiei')
 console.log(Per1.isEqual(Per2));
 console.log(Per1.getAge());

