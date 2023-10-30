function solution(str){
   return str.concat('_').match(/\w{2}/g) || []
}
console.log(solution(''));
console.log(solution('abc'));
console.log(solution('abcd'));


function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }


 console.log([].filter(a=>a>0)?.reduce((a,b)=>a+b ,0));