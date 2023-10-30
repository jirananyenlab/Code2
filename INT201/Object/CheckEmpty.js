let a , b = {id:2 ,name :'Lodchong'} , c = {}
//console.log(Object?.keys(a)?.length === 0);
console.log(Object.keys(b).length === 0); //false
console.log(Object.keys(c).length === 0); //true

console.log(JSON.stringify(b) === '{}') //false
console.log(JSON.stringify(c) === '{}') //true