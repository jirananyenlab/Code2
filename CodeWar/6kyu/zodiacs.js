function solve(s) {
    return s.split(/[aeiou]+/).reduce((s, n) => Math.max(s, n.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)), 0);
  }
  console.log(solve("zodiacs"))
  
function solve(s) {
    let highest = 0
    let sum = 0
  
    for (const char of s) { //'Z' 'O' ....
      if (isConsonant(char)) {
        sum += getValue(char)
  
        if (highest < sum) {
          highest = sum
        }
      } else {
        sum = 0
      }
    }
  
    return highest
  }

  function getValue(char) {
    return char.charCodeAt(0) - 96 //'a'.charCodeAt(0) = 97
  }
  
  function isConsonant(char) {
    return !('aeiou'.includes(char))// !(aeiou ต้องมีค่าที่ส่งมาเป็นส่วนประกอบ char('z' 'o' ....))
  }
  console.log(solve("zodiacs"))