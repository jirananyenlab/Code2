function doubles(maxk, maxn) { //runtime ไม่ผ่านน
  let result =0 
  for (let k = 1; k <= maxk; k++) {
       for (let n = 1; n <= maxn; n++) {
              result += 1/(k*Math.pow(n+1,2*k))
    }
  } 
  return  result
}

function doubles(maxk, maxn) { //อันที่รัน time ผ่านของคนอื่น
  var s = 0, p, q;
  for(let i = 1; i <= maxk; i++) {
      p = s;
      for(let j = 1; j <= maxn; j++) {
          q = s;
          s += 1/(i*(j + 1)**(2*i));
          if(Math.abs(q-s) < 1e-9/maxk/maxn) break;
      }
      if(Math.abs(p-s) < 1e-9/maxk) break;
  }

  return s;
}