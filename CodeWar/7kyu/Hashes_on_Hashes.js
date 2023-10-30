function hashlife(array) {
    let numArr = []
for (const i in array) {
    if (typeof  array[i]=== 'number') {
    let splice = array.splice(i,1)
    numArr.push(...splice)
    }
}
 return array.map((a,i)=>a.split('').fill('#',0,numArr[i]).join('') )
  }

console.log(hashlife([3,"ketchup",1,"fraud",2,"store"]));
console.log(hashlife([2,"candy",1,"fat",2,"poop"]));
console.log(hashlife([1,"rat",2,"foolish",2,"gorillas"]));
let a = ['a','d','j','e','r']
a.fill('#',0,3)
//console.log(a);