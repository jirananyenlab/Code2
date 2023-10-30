const names = ['alice' , 'john' ,'Bob','Ann']
const isStartWithALetter = names.every(a=>a.toLowerCase().startsWith('a')); 
console.log(isStartWithALetter);
    
let nums =[ 5,2,3,4,7]
const total = nums.reduce( (previous,current) =>previous + current ,0 ) //กำหนดค่าเริ้มต้น previous = 0  current 0:5  , 1:2 ,2:3
console.log(total);

let a = []
console.log(a.reduce( (previous,current) =>previous + current ,0 )); // output 0

const isStartWith = names.reduce((a,b) => a+b[0],'')
console.log(isStartWith);

const buyProducts = [{price:50 , quanlity:2} , {price:299 , quanlity:10} , {price:15 , quanlity:5}]
const totalProducts = buyProducts.map(a=>a.price*a.quanlity).reduce((a,b)=>a+b,0)

const totalProducts2 = buyProducts.reduce((a,b)=>a+(b.price*b.quanlity),0)
console.log(totalProducts2);