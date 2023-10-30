function DNAStrand(dna){ 
  let paris = {A:'T' , T:'A' , C:'G' ,G:'C'}
  return  dna.split('').map((a) =>paris[a] ).join('')
  }
  console.log(DNAStrand("TACGTA"));

  function DNAStrand1(dna){ 
   return  dna.map(a=>a+2)
    }
    console.log(DNAStrand1([2,2,3]));