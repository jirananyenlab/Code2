function Person(myName) {
    this.name = myName ;
  }
    Person.prototype.greet = function (myName) {
    return `Hello ${myName}, my name is ${this.name}`;
  }
  let jill = new Person('Jill');
  console.log(jill.name);

  let jack = new Person('Jack');
  console.log(jack.greet('Jill'));