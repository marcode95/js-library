<<<<<<< HEAD
const formToggler = document.getElementById('formToggler');
const form = document.getElementById('form');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const pagesInput = document.getElementById('pagesInput');
const checkboxInput = document.getElementById('readCheckbox');
const bookList = document.getElementById('bookList');

let myBooks = [];

function Book(title = '', author = '', pages = '', read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.setAttribute('data-title', book.title);

  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('p');
  const readStatus = document.createElement('p');

  const removeButton = document.createElement('button');
  removeButton.setAttribute('type', 'button');
  removeButton.innerText = 'Remove book';

  const readButton = document.createElement('button');
  readButton.setAttribute('type', 'button');
  readButton.innerText = book.read ? 'Unread' : 'Read';

  bookCard.classList.add('book-card');
  bookTitle.innerText = `Title: ${book.title}`;
  bookAuthor.innerText = `Author: ${book.author}`;
  bookPages.innerText = `Pages: ${book.pages}`;
  readStatus.innerText = `Read: ${book.read}`;

  bookCard.append(bookTitle);
  bookCard.append(bookAuthor);
  bookCard.append(bookPages);
  bookCard.append(readStatus);
  bookCard.append(removeButton);
  bookCard.append(readButton);
  bookList.append(bookCard);

  /* eslint-disable no-use-before-define */
  removeButton.addEventListener('click', removeBook);
  readButton.addEventListener('click', toggleReadStatus);
  /* eslint-enable no-use-before-define */
=======
function addBookToLibrary() {
  title = document.getElementById('titleInput').value;
  author = document.getElementById('authorInput').value;
  pages = document.getElementById('pagesInput').value;
  read = document.getElementById('readCheckbox').value;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
>>>>>>> 3ccd979b76bebea28981c54f6987259f3ba65f3c
}

console.log(myLibrary);