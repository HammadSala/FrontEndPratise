/*
Write a program to create an object of a book having different properties like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

Add a property called ‘change name’ as a function to change the name of the current book object.
Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object.
*/

var book = {
    "name" : "Why humans are so stupid in thinking",
    "authors" : ["Edward de Bono"],
    "publication year" : "19 feb 2008",
    "publisher" : "AbeBooks",
    "changeBookName" : (function ( newBook ) {
        this.name = newBook;
    }),
    "addAuthors" : ( function ( newAuthors ) {
        this.authors[this.authors.length] = newAuthors;
    } )

}

console.log(book);
console.log("Lnght", book.authors.length);
console.log("------------");
book.changeBookName("Power of Thinking");
book.addAuthors("Maxwell");
book.addAuthors("Dhoni");
book.addAuthors("GladWELL");
console.log("------------");

console.log(book);