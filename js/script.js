const helloWorld = 'Hello, World!';

let myLibrary = [];

const Book = function bookInfo(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
};

const toMyLibrary = function addToMyLibrary(title, author, page, read) {
  let userInput = new Book(title, author, page, read);
  return myLibrary.push(userInput);
};
