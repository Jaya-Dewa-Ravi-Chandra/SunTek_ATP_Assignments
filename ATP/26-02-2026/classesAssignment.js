/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

 */
class Book
{
    title='';
    author='';
    pages=0;
    isAvailable=true;
    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow()
    {
        this.isAvailable=false;
    }
    returnBook()
    {
        this.isAvailable=true;
    }
    getInfo()
    {
        console.log(`${this.title}\n${this.author}\n${this.pages}\nis Available:`,this.isAvailable)
    }
    isLongBook()
    {
        return this.pages>300;
    }
}
const a=new Book('JujutsuKaisen',"Gege atukami",265,true)
a.getInfo()
a.borrow()
a.getInfo()
a.returnBook()
a.getInfo()
console.log("is long book:",a.isLongBook())