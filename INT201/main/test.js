
  const x1 = [...'Hello World']
  console.log(x1)// [//   'H', 'e', 'l', 'l',//   'o', ' ', 'W', 'o',//   'r', 'l', 'd'// ]
  //destructuring array result [index, element] from entries()
  for (const [index, value] of x1.entries()) {  
    console.log('index ' + index +' value '+value)
    }

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();  //[ 0, 'Banana' ] ,... ,[ 3, 'Mango' ]
for (let x of f) {
   console.log(x);
  }
    //5. create array with Array.from()
    const x = [1, 3, 5]
    const y = [2, 4, 6]
    const z = Array.from(x)//compared with spread operator
    const a = [...x, ...y]
    console.log(z)
    console.log(a)