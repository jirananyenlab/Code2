var grid = ['top left',    'top middle',    'top right',
            'middle left', 'center',        'middle right',
            'bottom left', 'bottom middle', 'bottom right']
            
  function fire(x,y) {
    return grid[x + (3 *y)];
  }

function fire(x,y) {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let result = []
for (const i in grid) {
  if (i>=0 && i<=2) {
    arr1.push(grid[i])
  } 
  else if (i>=3 && i<=5) {
    arr2.push(grid[i])
  } 
  else if (i>=6 && i<=8) {
    arr3.push(grid[i])
  } 
  
}
 result = [arr1,arr2,arr3]   
  return result[y][x]
  }
  console.log(fire(1,2));


