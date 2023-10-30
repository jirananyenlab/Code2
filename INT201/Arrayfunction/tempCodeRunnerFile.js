const toLower = function low(a) {return a.toLowerCase()} 
console.log(toLower('HOME'));

//higher order function
function dosumeting2(msg , op) {
    return op(msg) 
}
console.log(dosumeting2('HELLO WORD!!',toLower));  //ถ้าจะส่ง function เป็น paramiter ห้ามใส่ ()