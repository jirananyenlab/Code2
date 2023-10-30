function sentence(List) {
   return List.sort((a,b)=> Object.keys(a) -  Object.keys(b)).map(a=>Object.values(a)).join(' ')
  }   
  console.log(sentence(
   [
   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
  ]
  ));  //Vatsan took his dog for a spin

  /*
[
  [ 'Vatsan' ],
  [ 'took' ],
  [ 'his' ],
  [ 'dog' ],
  [ 'for' ],
  [ 'a' ],
  [ 'spin' ]
]   -> .join(' ')  -> Vatsan took his dog for a spin
  */
console.log([1,2,3].toString());  //1,2,3
console.log([[1],2,3].toString());  //1,2,3
console.log([[[1],2],3].toString());  //1,2,3

 
