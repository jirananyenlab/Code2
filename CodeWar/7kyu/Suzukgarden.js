function rakeGarden(garden) {
    // TODO: Program Me
    return garden.split(' ').map(a=> a==="gravel" || a==='rock'? a: a="gravel" ).join(' ')
  }
  let garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
  console.log(rakeGarden(garden1));

  function countVegetables(string){
   let result = []
  let string2 = string.match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g)
                .reduce((arr,curr) =>{
                arr[curr] = (arr[curr] || 0 )+1
                    return arr
                },{})
                
                  for (const [key, value] of Object.entries(string2)) {
                        result.push([value,key])
                      }
            
        
                return result.sort((a,b)=> b[0]-a[0] || b[1].localeCompare(a[1]))
  }
  let s2 = "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
  "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
  "onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
  "onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
  "potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
  "mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip"
  console.log(countVegetables(s2))

  let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
  console.log(countVegetables(s1))