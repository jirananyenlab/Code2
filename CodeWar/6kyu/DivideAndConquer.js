function consecutiveNums(arr, w) {
    if (arr.length % w != 0) return false;
    if (w == 1) return true;
    arr.sort((a, b) => a - b);
    let h = arr.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {}); //{ '1': 1, '2': 2, '3': 2, '4': 1, '6': 1, '7': 1, '8': 1 }
    for (let i = 0; i < arr.length; i++) {
      let n = arr[i];
      while (h[n]) {
        for (let j = 0; j < w; j++) {
          if (!h[n + j]) return false;
          h[n + j]--;
        }
      }
    }
    return  Object.values(h).every(n => !n);
  }
console.log(consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));

function consecutiveNums(arr, div) {
  const counts = {};
  for (const num of arr) {
      counts[num] = ~~counts[num] + 1;
  }

  for (const num of Object.keys(counts).sort((a, b) => +a - +b)) {
      const val = counts[num];
      if (val < 1) continue;

      for (let x = 1; x < div; x++) {
          if (~~counts[+num + x] < val) return false;
          counts[+num + x] -= val;
      }
  }

  return true;
}