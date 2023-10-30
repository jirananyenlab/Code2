
  function explode(x){
    var score = 0;
    var result = [];
    if((typeof x[0] !== 'number') && (typeof x[1] !=='number')){
        return 'Void!'
     }else if((typeof x[0] !== 'number') && (typeof x[1] ==='number')){
        score = x[1];
      }else if ((typeof x[0] === 'number') && (typeof x[1] !=='number')){
        score = x[0];
      }else{
         score = x[0]+x[1];
      }
      for(let i=0; i<score; i++){
        result.push(x);
      }
     return result;
  }


  function explode(x){
    const haveST = (n) => typeof n === 'string';
   let [a,b] =x //a คือ element ตัวแรก ของ x  2,b,9,vb
  return x.every(haveST) ? 'Void!' : x.some(haveST) ? ( typeof a === "number" ? Array(a).fill(x): Array(b).fill(x))   : Array(a+b).fill(x)
  }


  console.log(explode([2,'a']))
  console.log(explode(['b','a']))
  console.log(explode([9,3]))
  console.log(explode(['vb',3]))
  

//make it yourself
  function explode(x){
    const haveST = (n) => typeof n === 'string';
    const make1 = (n) => {
      let b = 0 , a = []
     if (typeof x[0] === 'number' && typeof x[1] === 'number') {
      b=x[0] +  x[1] ;
     } else if (typeof x[0] === 'string' && typeof x[1] === 'number'){
      b=x[1] ;
     }
     else if (typeof x[0] === 'number' &&  typeof x[1] === 'string'){
      b=x[0] ;
     }
      
      for (let i = 1; i <= b; i++) {
        a.push(x)
       }  
       return a
      } 
  return x.every(haveST) ? 'Void!' : x.some(haveST) ?  make1(x) : make1(x)
  }
