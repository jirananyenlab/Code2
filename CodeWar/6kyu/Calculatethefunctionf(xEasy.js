function getFunction(sequence) {
    let symbol = (nums) => nums >= 0 ? (m(sequence) === 0 ? '' : '+') : '-'
    let x = (nums) => nums === 0 ? '' : 'x'
    let m = (sequence) => sequence[1] - sequence[0]
    return sequence[1] - sequence[0] === sequence[4] - sequence[3] ? m(sequence) === 0 ?
      `f(x) = ${symbol(sequence[0])}${Math.abs(sequence[0])}` :
      ((`f(x) = ` + `${m(sequence) === 1 ? '' : m(sequence) === -1 ? '-' : m(sequence)}` +
        `${x(m(sequence))} ` + `${symbol(sequence[0])} ${Math.abs(sequence[0])}`).trim()
        .replace('+ 0', '').replace().trim()) : 'Non-linear sequence'
  }
  console.log(getFunction([0, 1, 2, 3, 4]));
  console.log(getFunction([0, -1, -2, -3, -4]));
  console.log(getFunction([1, 4, 7, 10, 13]));
  console.log(getFunction([-1, -5, -9, -13, -17]));
  console.log(getFunction([3, 3, 3, 3, 3]));
  console.log(getFunction([-3, -3, -3, -3, -3]));