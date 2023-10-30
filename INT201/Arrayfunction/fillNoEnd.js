// array.fill(value, start, end)  ไม่รวม end
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi",1,2)); //kiwi 
//same
console.log(fruits.fill("Kiwi",2,4)); 
console.log(fruits.fill("Kiwi",2)); 

const nums = [-5,-6,7,8,9,-1,0]

//console.log(nums.map(a=>a>=0 ? a:a=0));
function replaceZero(nums) {
    nums.forEach((e,i)=> {
        if (e<0)nums.fill(0,i,++i)
            }
        );
        return nums
}

console.log(replaceZero(nums))