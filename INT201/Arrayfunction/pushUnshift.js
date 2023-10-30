let arr = [11,2,3,4]
let a = arr.push(5,8)
console.log(a); //6 return length ของ arr
console.log(arr); //[ 11, 2, 3, 4, 5 , 8]

let b = arr.pop()
console.log(b); // 5  return สิ่งทีเอาออกตัวสุดท้าย
console.log(arr)

let c = arr.shift()
console.log(c); // 11  return สิ่งทีเอาออกตัวหน้า
console.log(arr)

let d = arr.unshift(7,1,3,74)
console.log( d); // 7  return length ของ arr
console.log(arr)  //[ 14, 2, 3, 4 ]

