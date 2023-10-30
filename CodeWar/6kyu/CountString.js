function longestRepetition(s) {
   return s.split('').reduce((sum,curr)=>{
    sum[curr] = (sum[curr] || 0) +1
    return sum
   } , {})
       }
       console.log(longestRepetition('aaabbbbss'));