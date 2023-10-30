function solve(arr){
   return arr.find(e=>!arr.includes(-e));
};
console.log(solve([1,-1,2,-2,3,-2]));