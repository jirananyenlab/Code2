/*const testit = s => s.replace(/\w\b/g, val => val.toUpperCase());

function testit(s){
let str = '';
for (i = 0; i < s.length; i++) {
   if (s[i + 1] === ' ' || i === s.length - 1) {
      str += s[i].toUpperCase();
   } else {
      str += s[i]
   }
}
return str;
} 
*/
function testit(s){
return  s.split(' ').map( s => s.slice(0, -1) + s.slice(-1).toUpperCase()).join(' ') //array.slice(begin, end) ตัดตั้งแต่ begin ถึง ตัวก่อนหน้า end ไม่เอาจบ
                                                                                    //array.slice(-1) ตัวสุกท้ายเสมอ
}
console.log(testit("mcc yqb jrgapple ban"))