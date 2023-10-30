
function solution(s, t) {
  //This calculates the base distance if the runner never sprints
  let baseDistance = s * t;

  //This calculates the max number of sprints available rounded up i.e. 5t === 3 sprints
  let maxSprints = Math.ceil(t / 2)

  //This will calculate the distance gains from sprints, 
  //ideally these sprints would be done at the end to minimize the 
  //speed lose caused by the sprint.
  for (let i = 0; i < maxSprints; i++) {

    //This calulates the distance gained each time that we sprint and we want to sprint as 
    //long as it still provides an increase in distance. The first time that you sprint
    //the runner gets the full distance, each sprint after will lose 3 distance.

    //Example: if s === 20, the first sprint gains 20, the runner loses 1 speed from sprinting
    //and two speed from the new maximum sprint which is 18. This is why we minus 3. 
    if (s - (3 * i) > 0) {
      baseDistance += s - 3 * i;
    }
  }
  return baseDistance;
}
console.log(solution(2, 4))


var distanceFromLine = function (a, b, c) {
  let result = 0
  //กรณี  a and b are not same 

  // หาจุด x
  let i = Math.round((a[0] + b[0]) / 2)
  let j = Math.round((a[1] + b[1]) / 2)
  let x = [i, j]

  //ระยะทาง จาก c ไป จุด x (x ตือ จุดกึ่งกลาง ของ a และ b)
  if (a.toString() === b.toString()) {
    result = Math.sqrt(((c[0] - a[0]) ** 2) + ((c[1] - a[1]) ** 2))
  }
  result = Math.sqrt(((c[0] - x[0]) ** 2) + ((c[1] - x[1]) ** 2))
  return result;
}
console.log(distanceFromLine([10, 10], [70, 70], [40, 40]))




function noRepeat(str) {
  for (const i of str) {
    if (str.split('').filter((a) => a === i).length === 1) {
      return i
    }
  }
}

function noRepeat(str) { for (var i of str) if (str.split(i).length == 2) return i } // if i = e จะได้  [ 't', 'sting' ]

function noRepeat(str) { return str.split('').filter((a, i) => str.indexOf(a) === str.lastIndexOf(a))[0] } // ...[0] แปลว่าเอา ตำแหน่งที่ 0

console.log(noRepeat("testing"))
console.log(noRepeat("aabbccdde"))
console.log(noRepeat("wxyz"))
console.log(noRepeat("testing"))

var removeVowels = function (str) {
  return str.match(/[^aeiou]/g) <= 0 ? "" : str.match(/[^aeiou]/g).join('')
}
console.log(removeVowels("drake"))

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, ''); //แทน ตัว aeiou ด้วย ''
}
console.log(removeVowels("drake"))
console.log(removeVowels("aeiou"))



function comp(array1, array2) {
  let result = []
  if (array1.length !== 0 || array2.length !== 0) {
    for (const i of array1) {
      array2 = array2.filter(a => a === (i ** 2)).map(a => result.push(a))
    } array2.includes(array1)
  } return false
}



function comp(array1, array2) {
  // if ( array1.toString()===''|| array2.toString()===''|| array1 === null ||  array2 === null) {
  //   return false
  // }
  if (array1 === null || array2 === null) {
    return false
  }
  return array1.map(a => Math.pow(a, 2)).sort((a, b) => a - b).toString() === array2.sort((a, b) => a - b).toString()
}


let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a, b))

let a1 = [121, 144, 19, 161, 19, 144, 19, 11]
let b2 = null
console.log(b2 === null)

function xxxx(a, b) {
  if (a === null || b === 5) return true
  else return false
}
console.log(xxxx(null, 0))
let arr = []
console.log(arr === null)


function matrixAddition(a, b) {
  return a.map((e, i) => e.map((p, u) => p + b[i][u])) // บวก ตามแนวตั้ง
}

console.log(matrixAddition(
  [
    [1, 2],
    [1, 2]
  ],
  [
    [2, 3],
    [2, 3]
  ]))

console.log(matrixAddition(
  [[1, 2, 3],
  [3, 2, 1],
  [1, 1, 1]],

  [[2, 2, 1],
  [3, 2, 3],
  [1, 1, 3]]))




console.log([[1, 2], [5, 6]].map(a => a.map(j => j + 1))); //[ [ 2, 3 ], [ 6, 7 ] ]
console.log([[1, 2], [5, 6]].map(a => a[0])[0] + 1); //1+1 = 2
console.log([[1, 2]].map(a => a[0] + 1)); //[1]
console.log([[1, 2]].map((a) => a)); //[ [ 1, 2 ] ]

console.log([[1, 2]].map((a, i) => a[i] + 5)); //1+1 = 2

console.log([[1, 7]] + 8); //1,78

console.log([[1, 7], [5, 7]].map((a, i) => a.map((j, u) => j)));




function domainName(url) {                                           //?: Group (a)b(?:c)	Captures 'a' but only groups 'c'
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]// +  หมายถึง มี 1 หรือมากกว่า 1 ตัว
  // ?   หมายถึง ไม่มีเลย หรือมีแค่ 1 ตัวเท่านั้น
}
console.log(domainName("www.xakep.ru"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("http://www.zombie-bites.com"));

let e = 'e'
console.log(e === e.toLowerCase());

function stringTransformer(str) {
  return str.split(' ').map(a => a.split('').map(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90 ? x.toLowerCase() : x.toUpperCase())).reverse().join(' ').split(',').join('')
  //  .map(v => v == v.toUpperCase() ?
}
const stringTransformer = text => text.replace(/\w/g, ch => /[A-Z]/.test(ch) ? ch.toLowerCase() : ch.toUpperCase()).split` `.reverse().join` `;
// \w ตัวอักษรทุกตัว

function stringTransformer(str) {
  let cheakCase = (a) => a.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
  return str.split(' ').map(a => cheakCase(a)).reverse().join(' ').split(',').join('')
}

const stringTransformer = s => s.split(' ').reverse().join(' ').split('').map(invertCase).join('');
const invertCase = c => /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase();

console.log(stringTransformer('Example string'));
console.log(stringTransformer('Example Input'));
console.log(stringTransformer('ExaMple InPut'));




function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}


function solution(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
var ans = '';
  while(number>0){ // number 19
    for(a in roman){ // a = M  CM D CD..
        if(roman[a]<=number){  // a :  X 10<= 19
          ans += a; // ans = X
          number-=roman[a]; //19 = 19 -10 = 9
           break;
          }     
      }
   }
   return ans;
}

function solution(number){
  const table = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I']
  ];
  
  for (let [num, notation] of table) {
    if (number >= num)
      return notation + solution(number - num)
  }
  return ''
}
  console.log(solution(19));//XIX