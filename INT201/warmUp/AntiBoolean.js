function AntiBoolean(arr) {
    return !arr.some(a=>a===true||a===false)
}
console.log(AntiBoolean([1,'lodchong',false]));
console.log(AntiBoolean([1,'lodchong',55]));