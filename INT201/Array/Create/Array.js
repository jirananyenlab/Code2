console.log(Array());  // []
console.log(Array('a'));  // [a]
console.log(Array(2));  //[ <2 empty items> ]
console.log(Array(2,'a'));  // [ 2, 'a' ] 

let arr1 = Array(2) //[ <2 empty items> ]
arr1[0]= 1
console.log(arr1);  //[ 1, <1 empty item> ]