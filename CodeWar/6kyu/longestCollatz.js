/*
longestCollatz([2, 4, 3])===3;
if n is even, calculate: n / 2
if n is odd, calculate: 3 * n + 1
*/
function longestCollatz(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
      let count = 0
      let total = inputArray[i]
      while (total > 1) {
        if (total % 2 === 0) {
          total /= 2
        } else {
          total = 3 * total + 1
        }
        ++count
      }
      result.push(count)
    }
    return inputArray[result.indexOf(Math.max(...result))]
  }
  console.log(longestCollatz([2, 4, 3]));
  
  function longestCollatz2(inputArray) {
    const seq = inputArray.map(e => getCollatz(e)),
      max = Math.max(...seq);
    return inputArray[seq.indexOf(max)];
  }
  
  const getCollatz = (n, count = 1) => { return n == 1 ? count : n % 2 == 0 ? getCollatz(n / 2, count += 1) : getCollatz(3 * n + 1, count += 1) }