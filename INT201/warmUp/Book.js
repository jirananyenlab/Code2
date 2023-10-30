class BookMark  {
  constructor(isbn, totalPages ,bookMarks = []){
    this.bookMarks = bookMarks
    this.isbn =isbn
    this.totalPages =totalPages ?? 0
 }

 /*constructor(isbn, totalPages = 0) {
  this.isbn = isbn
  this.totalPages = totalPages
  this.bookMarks = []
}*/

 addBookMark(pageNumber){
  if (pageNumber>=1 || this.totalPages>=pageNumber ) {
    this.bookMarks.push(pageNumber)
  }
    return this.bookMarks.length
 }
    removeBookMark(pageNumber) {
    if (pageNumber===null || pageNumber===undefined || this.bookMarks.includes(pageNumber) === false) {
        return undefined
    }
    this.bookMarks.splice(this.bookMarks.indexOf(pageNumber),1) 
    return this.bookMarks
 }
    goToFirstBookMark(){return this.bookMarks[0]}
    goToLastBookMark(){
        return this.bookMarks?.reverse()[0]
    }
     getBookMarks(){
     return this.bookMarks
    }
}
let bmNumber1 = 22 
const bm1 = new BookMark('978-7-222-64532-2')
console.log(bm1);
console.log(bm1.addBookMark(60));
console.log(bm1.addBookMark(bmNumber1));;
console.log(bm1.addBookMark(80));
console.log(bm1.getBookMarks());
console.log(bm1.removeBookMark(80));
console.log(bm1.getBookMarks());
console.log(bm1.goToFirstBookMark());
console.log(bm1.goToLastBookMark());



