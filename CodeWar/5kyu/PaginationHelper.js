class PaginationHelper {
	constructor(collection, itemsPerPage) {
	this.collection = collection
    this.itemsPerPage= itemsPerPage
	}
	itemCount() {
	 return this.collection.length
	}
	 pageCount() {
     return   Math.ceil(this.collection.length/this.itemsPerPage) 
	}
	pageItemCount(pageIndex) { //input คือ หมายเลขหน้า 0 คือหน้าแรก  นับว่า หน้าแรกมีกี่ไอเทม

   
 
	}
	pageIndex(itemIndex) { //รับ index page มาแล้ว return ออกมาว่า index นั้นต้องอยู่หน้าไหน
       return itemIndex<0 || itemIndex > this.collection.length-1 ? -1 :  Math.floor(itemIndex/this.itemsPerPage)  
	}
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

console.log(helper.itemCount());
console.log(helper.pageCount());

console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageItemCount(3));
console.log(helper.pageIndex(-15));
console.log(helper.pageItemCount(0));
console.log(helper.pageIndex(0));
		