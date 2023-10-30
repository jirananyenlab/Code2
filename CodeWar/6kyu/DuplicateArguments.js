function solution(...arg){
   return arg.some(a=>arg.indexOf(a)!==arg.lastIndexOf(a)) 
   }
   console.log(solution(1,2,3));
   console.log(solution(1,2,3,6,5,6));
   console.log(solution('a','b','c','a'));
   console.log(solution(1,2,3,'a','b'));

   function solution(...args){
    return args.length !== new Set(args).size;
 }