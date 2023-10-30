const nums = [10,3,75,1,30,100]
const nums2 = [10,3,100]

//remove 75 ,1 ,30
console.log(nums.splice(2,3)); //[ 75, 1, 30 ]
console.log(nums); //[ 10, 3, 100 ]

//2. splice to add new element
const addEles = nums.splice(2,0,111,555,888)  //แทรกตรง index ที่ 2
console.log(addEles); // [] return สิ่งที่ลบ
console.log(nums);  //[ 10, 3, 111, 555, 888, 100 ]

const addEles2 = nums2.splice(3,0,111,555,888)  //ต่อข้างหลัง 111 เป็น index ที่ 3
console.log(nums2);  //[ 10, 3, 100, 111, 555, 888 ]

//3. splice to replace at index 1 with [200, 400]

//nums = [ 10, 3, 111, 555, 888, 100 ]
const replaceEles = nums.splice(1, 2, 200, 400)  //เริ่ม index ที่ 1 คือ 3 แล้ว ลบไป 2 ตัว คือ 3 , 111 แล้วเพิ่ม 200 , 400 
console.log(replaceEles) //[ 3, 111 ]
console.log(nums)

