/*
solution({a: 1, b: '2'}) should return "a = 1,b = 2"
*/
function solution(pairs){
    let result = ''
for (const [key,value] of Object.entries(pairs)) {
    result += `${key} = ${value},`
}
return result.slice(0,result.length-1)
}

function solution(pairs){
    return Object.keys(pairs).map(a=> `${a} = ${pairs[a]}`).join(',')
}

const solution = pairs =>
    Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',');
        
console.log(solution({a: 1, b: '2'}));