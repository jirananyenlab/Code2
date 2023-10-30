const longestRepetition = s =>
  s.match(/(.)\1*|$/g).reduce(([c, l], val) => val.length > l ? [val[0], val.length] : [c, l], [``, 0]);

 function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';
       return s.toLowerCase().split('').reduce((acc,curr)=> {
        if(curr === prevLetter){
          count++;
        }  // นับตัวซ้ำ
        else{
          count = 1;
        }
    
        if(count > acc[1]){
          acc[1] = count;
          acc[0] = curr;
        }  //ทำ [ curr, count]
    
        prevLetter = curr; //prevLetter = 'b'
        return acc;
      }, ['', 0]);
     }
  
  console.log(longestRepetition("bkkkkkkj"));
  console.log(longestRepetition("bbbaaabaaaa"));

  //console.log(''.length || 'ax'.length);
let a = {names : 'a'}
console.log(a['names']);
console.log(a['id']=1);
console.log(a);