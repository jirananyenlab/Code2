/*
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
*/

function findSmallestInt(args) {
    return Math.min(...args)
  }
  console.log(findSmallestInt([78,56,232,12,8]))
  
  function findSmallestInt(args) {
    return args.sort((a,b) => a-b)[0]//Math.min(e,args[++i])
  }
  console.log(findSmallestInt([78,56,232,12,8]))