/*
[], 0
[undefined], 0
[null], 0
[false], 0]
[true], 1
[undefined,null,false,true], 1
[undefined,null,false,true,true,false,null,undefined], 2
*/
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  console.log(countSheeps([false,true,true,null]));