function arrayDiff(a, b) {
  return a.filter(i=>!b.includes(i))

}

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff([],[2]));
console.log(arrayDiff([1,2,2,2,3],[]));
console.log(arrayDiff([1,2,2,2,3],[1,2]));

function array_diff(a, b) {
  let arr = new Array();
  for(let i = 0;i<a.length;i++){
      if(b.indexOf(a[i])<0){   //b.indexOf(a[i])<0 =-1 => -1 คือไม่มีใน b
          arr.push(a[i]);
      }
  }

  return arr;
}

function arrayDiff(a, b) {
  if(b.length==0 || a.length==0)
    return a;
  for(let i =0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
      if(a[i]==b[j]){
        a.splice(i,1);
        i--;
      }
    }
  }
  return a;
}





//console.log(b.filter((i,j) => a.includes(i))); //จะฟิลเตอร์เอา element ใน a ที่ตรงกับ b  ถ้าไม่มีจะ []

//splice(-1,1) จะเอาตัวสุดท้ายออก