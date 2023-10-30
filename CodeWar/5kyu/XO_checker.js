function isSolved(board) {
  board = board.join('-').replace(/,/g,'');
  if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if(/0/.test(board)) return -1;
  return 0;
}

function isSolved(board) {
    const rowX = (array) => array.map(x=>x.every(a=>a===1)) 
    const rowO = (array) => array.map(x=>x.every(a=>a===2) ) 
    const columnX = (array) => array.map((x)=>x[0]).every(a=>a===1) || array.map((x)=>x[1]).every(a=>a===1) || array.map((x)=>x[2]).every(a=>a===1)
    const columnO = (array) => array.map((x)=>x[0]).every(a=>a===2) || array.map((x)=>x[1]).every(a=>a===2) || array.map((x)=>x[2]).every(a=>a===2)
    const diagonally =(array) =>{ 
      return (array[0][0] === 1 && array[1][1] === 1 && array[2][2] === 1) ||  (array[0][2] === 1 && array[1][1] === 1 && array[2][0] === 1) ? 1 :
        (array[0][0] === 2 && array[1][1] === 2 && array[2][2] === 2) ||  (array[0][2] === 2 && array[1][1] === 2 && array[2][0] === 2) ? 2 : 0
    } 

   if (rowX(board).some(a=>a===true) || columnX(board) || diagonally(board) === 1 ) {
    return 1
   } else if (rowO(board).some(a=>a===true) || columnO(board) || diagonally(board) === 2 ) { 
    return 2
  } else if (board.map((x,i)=>x.some(a=>a===0)).find(z=>z===true)) {
    return -1
  } else {
    return 0
  }
  }

  console.log(isSolved(
    [[1, 0, 1],
    [0, 0, 1],
    [2, 1, 1]]));

    
  console.log("1 " +isSolved(
    [[1,1,1],[0,2,2],[0,0,0]]));

    console.log("2 " +isSolved(
      [[2,2,2],[0,1,1],[1,0,0]]));

    console.log("2 " +isSolved(
      [[1,1,2],[0,2,2],[0,0,2]]));

      console.log("0 " +isSolved(
        [[2,0,2],[2,1,1],[1,2,1]]));

        console.log("0 " +isSolved(
          [[2,0,2],[2,1,1],[1,2,1]]));
  
        
          const horizontal = (player) => (board) => 
          board.some(row => row.every(spot => spot == player))
          
        const vertical = (player) => (board) => 
          board.some((row, i) => board.every(row => row[i] == player))
          
        const diagonals = (player) => (board) => 
          board.every((row, i) => row[i] == player) || board.every((row, i) => row[3-1-i] == player)
          
        const player = (number) => ({
          wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
        })
        
        const unfinished = (board) =>
          board.some(row => row.some(spot => !spot))
        
        const DRAW = 0
        
        
        const isSolved = (board) => {switch (true) {
          case player(1).wins (board):
            return 1
            
          case player(2).wins (board):
            return 2
          
          case unfinished (board):
            return -1
        
          default:
            return DRAW
        }}