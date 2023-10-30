  /* common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
    common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays */

    function common(a, b, c) {
    return a.reduce((acc, el) => {
      if (b.includes(el) && c.includes(el)) {
        b.splice(b.indexOf(el), 1)  //splice เอาตัวที่ common ออก เพื่อ [1,2,3,3],[5,3,2],[7,3,2]  
        c.splice(c.indexOf(el), 1)  // ถ้าไม่ splice เอาตัวที่ นับแล้วออก มันจะ +3 เพิ่ม ใน Array a index 3
        acc += el
      }
      return acc
    }, 0)
}




function common(a, b, c) {
    let [ah, bh, ch] = [a, b, c].map(r =>
       r.reduce((h, n) => (h[n] = h[n] + 1 || 1, h), {}));
    return [...new Set(a)].reduce((s, n) => s + n * (Math.min(ah[n], bh[n], ch[n]) || 0), 0);
  }

function common(a, b, c) {   
let [ah,bh,ch]=[a,b,c]
return ah  //[1,2,3]
}
console.log(common([1,2,3],[5,3,2],[7,3,2]));
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));
console.log(common([1,2,3,3],[5,3,2],[7,3,2]));
