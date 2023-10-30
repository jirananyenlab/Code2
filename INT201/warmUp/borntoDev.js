let multipleInit = receipts.reduce(function (prev, curr) {
    if (curr.price > 20) {
        prev.expensive.push(curr);
    } else {
        prev.cheap.push(curr);
    }
    return prev;
}, {
    expensive: [], //Array สำหรับเก็บรายการอาหารที่มีราคาสูงกว่า 20
    cheap: [], //Array สำหรับเก็บรายการอาหารที่มีราคาต่ำกว่า 20 หรือต่ำกว่า
});

console.log(multipleInit)
// {
// expensive: [ { name: 'sausage', price: 42 }, { name: 'coffee', price: 32 } ],
// cheap: [ { name: 'orange', price: 20 } ]
// }