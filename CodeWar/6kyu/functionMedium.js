function getFunction(sequence) {
    let c = sequence[0],
        m = sequence[1] - sequence[0],
        fn = function(x){ return (m * x) + c; };
    return sequence.every(function(y, x){ return fn(x) === y; }) ? fn : 'Non-linear sequence'; 
  }
  console.log(getFunction([1, 4, 7, 10, 13]));