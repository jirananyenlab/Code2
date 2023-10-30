function ops(n1 = 0, n2, ...n3) {
    // console.log(n1, n2, n3)
    console.log('length:', arguments.length)
    for (const ar of arguments) {
      console.log(ar)
    }
    console.log(arguments[2])
  }
  ops(5, 10, 40, 50)
  // ops(5, 10, 40, 50, 100, 200, true)

  console.log("-------------");
  function ops2(n1 = 0) {
    // console.log(n1, n2, n3)
    console.log('length:', arguments.length)
    for (const ar of arguments) {
      console.log(ar)
    }
    console.log(arguments[1])
  }
  ops([2,3,4],[5,6,7])

  console.log("-------------");

  function ops3(n1 = 0, n2, ...n3) {
    // console.log(n1, n2, n3)
    console.log(n3); 
  }
  ops3(5, 10, 40, 50)