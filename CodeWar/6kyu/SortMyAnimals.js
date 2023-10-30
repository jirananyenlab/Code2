function sortAnimal(animals) {
    return animals.slice().sort((a,b)=> a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))
 }
 function sortAnimal(animals) {
    return [...animals].sort((a,b)=> a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name))
 }
     

function sortAnimal(animals) {
    // Return sorted animals
    let newArr = [...animals].sort((a,b) => {
      
      if(a.numberOfLegs === b.numberOfLegs){
        return a.name < b.name ? -1 : 1;
      }else{
        return a.numberOfLegs - b.numberOfLegs
      }
    });
      return newArr;
  }
  
  let animal = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }
  ]
  console.log(sortAnimal([]));

