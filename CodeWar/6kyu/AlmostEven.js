var splitInteger = function(num, parts) {
    return Array.from({length:p},(_,i)=>~~(n/p)+(p-1-i<n%p))
    }

    var splitInteger = function(num, parts) {
        const result = [];
        
        const divisor = Math.floor(num / parts)
        const rest = num % parts;
        
        for (let i = 0; i < parts - rest; i++) {
          result.push(divisor);
        }
        
        for (let i = 0; i < rest; i++) {
          result.push(divisor + 1);
        }
        
        return result;
      }

      function sumTwoSmallestNumbers(numbers) {  
        numbers.sort((a,b)=>a-b)
        return numbers[0] + numbers[1]
     }

     function sumTwoSmallestNumbers(numbers) {  
       return  numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b)
     }

     console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));