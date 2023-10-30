function counter(){
    let count = 1;
    function increment(){
        return ++count
    }
    function decrement(){
        return --count
    }
    function getCount(){
        return count
    }
    return {increment , decrement , getCount}
}

const {increment , decrement , getCount} = counter()
console.log(increment())
console.log(getCount())
console.log(decrement())