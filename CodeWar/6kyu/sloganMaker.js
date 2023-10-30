var sloganMaker = function(array){
    let inputarry = [...new Set(array)]
    let result = [];
    const permute = (arr, m = '' ) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(' ',next).trim())
       }
     }
   }
  
   permute(inputarry)
  
   return result;
        
    }
     
   
    console.log(sloganMaker(["cool", "pizza", "cool"]));
    console.log(sloganMaker(["super", "hot", "guacamole"]));

    function *permute(a, n = a.length) {
      if (n <= 1) yield a.slice();
      else for (let i = 0; i < n; i++) {
        yield *permute(a, n - 1);
        const j = n % 2 ? 0 : i;
        [a[n-1], a[j]] = [a[j], a[n-1]];
      }
    }
    
    var sloganMaker = function(array){
      let arr = Array.from(new Set(array))
      let newArr = Array.from(permute(arr)).map(perm => perm.join(' '))
      return newArr
    }

    let arr = [1,2,3,4]
    let curr = arr.slice();
    console.log(curr);
    let next = curr.splice(0, 1);
    console.log(curr);
    console.log(arr);
    console.log(next);
