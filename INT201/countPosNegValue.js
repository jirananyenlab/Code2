
function countPosNegValue(posNegintegerArray) {
    let result = {'positive':0 , 'negative':0}
    if (posNegintegerArray?.length === undefined) {
        result = undefined
    } else if (posNegintegerArray.length === 0){
        result = {}
    }
    else { 
        for (const i of posNegintegerArray) {
        if (i>0) {
            result.positive ++
        }
       else if (i<0) result.negative++
         }
        }
   return result
}


function countPosNegValue(posNegintegerArray) {
 return  typeof posNegintegerArray?.length === 'number' ?
 (posNegintegerArray.length > 0 ? 
    {positive : posNegintegerArray.filter(x=>x>0).length,negative : posNegintegerArray.filter(x=>x<0).length }: {} )  : undefined
}



   function countPosNegValue(posNegintegerArray) {
    return  posNegintegerArray?.reduce((count,curr) => {
        if(curr>0) count['positive'] =(count['positive'] || 0) +1  
        else if(curr<0)count['negative'] = (count['negative'] || 0) + 1 
        else if(curr===0) {
            count['positive'] = (count['positive'] || 0) 
            count['negative'] = (count['negative'] || 0)
        }
    return count
    }
     ,{}) ?? undefined
   }
     


  function countPosNegValue(posNegintegerArray) {
    return  posNegintegerArray?.length === 0 ? {} : posNegintegerArray?.reduce((count,curr) => {
        if(curr>0) count['positive'] = (count['positive'] || 0) +1  
        else if(curr<0)count['negative'] = (count['negative'] || 0) +1 
    return count
    }
     ,{positive:0,negative:0}) ?? undefined
   }

   function countPosNegValue(posNegintegerArray) {
    return  posNegintegerArray?.reduce((count,curr) => {
        if(curr>0) count['positive'] +=1  
        else if(curr<0)count['negative'] +=1 
    return count
    }
     ,posNegintegerArray?.length === 0 ? {} : {positive:0,negative:0}) ?? undefined
   }

console.log(countPosNegValue([0,1,-7,8,-4,0]));
console.log(countPosNegValue([1,999,8,-4]));
console.log(countPosNegValue([0,0,0,0]));
console.log(countPosNegValue([]));
console.log(countPosNegValue(null));
console.log(countPosNegValue(undefined));


   function countPosNegValue(posNegintegerArray) {
    return  posNegintegerArray?.reduce((count,curr) => {
        // การกำหนดแบบบนี้ เหมือนเป็นการล้างค่า set ค่า positive , negative ใหม่ให้ตัว element ต่อไป
        count['positive'] = 0
        count['negative'] = 0
        
        if(curr>0) count['positive'] =(count['positive'] || 0) +1  
        else if(curr<0)count['negative'] = (count['negative'] || 0) + 1 
    return count
    }
     ,{}) ?? undefined
   }
     