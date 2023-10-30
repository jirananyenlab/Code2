function largestRadialSum(arr, d) {
   //หาก้อนหลักๆ 15/5 = 3 ต้องมี 3 ก้อน
   let max = 0 , sum = []
   for (let i = 0; i < arr.length/d; i++) {
    let result = 0
      for (let j = i; j < arr.length; j+=arr.length/d) {
     result+=arr[j]
      }
      sum.push(result)
   }
   return Math.max(...sum)
  }

function largestRadialSum(arr, d) {
  let max = 0 
  for (let i = 0; i < arr.length/d; i++) {
   let result = 0
     for (let j = i; j < arr.length; j+=arr.length/d) {
    result+=arr[j]
     }
   if (i===0) { //set max
     max = result
   } if (result>max) {
     max = result
   }
  }
  return Math.max(...sum)
 } 

console.log(largestRadialSum([1,2,3,4], 2));
console.log(largestRadialSum([9,10,2], 3)); //ไม่ผ่าน้พราะเรา กระโดด อย่างละ 1 , 1 แต่อันนนี้จับมัด ละบวกกันเลน
console.log(largestRadialSum([-2,-1,-2,-2], 2));


function largestRadialSum(arr, d) {  // 15,5
  const n = arr.length / d
  const res = new Array(n).fill(0) //res=[0,0]
  arr.forEach((el, i) => {    // n = 3 |0 1| (2) => 0 (3) => 1 ,(4)=> 0 
    res[i < n ? i : i % n] += el  // i: 0 => 0+1 | i: 1=> 0+2 | i: (2%2) 0 => 1+3 | i:(3%2) 1 => 2+4
  })
  return Math.max.apply(null,res)
}



console.log(4%3); //1.333 = 1
console.log(5%3);  // 1.666 =2