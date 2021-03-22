const myLibrary = [];
function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
if (read) {
this.read = 'already read';
} else {
this.read = 'not yet read';
}
}

function bookCard(i) {
const formCard = document.createElement('div');
formCard.setAttribute('data-id', i);

const bookTitle = document.createElement('p');
const bookAuthor = document.createElement('p');
const bookPages = document.createElement('p');
const bookRead = document.createElement('p');

bookTitle.textContent = myLibrary[i].title;
bookAuthor.textContent = myLibrary[i].author;
bookPages.textContent = myLibrary[i].pages;
bookRead.textContent = myLibrary[i].read;

const removeButton = document.createElement('button');
removeButton.setAttribute('type', 'button');
removeButton.setAttribute('id', 'removebutton');
removeButton.innerText = 'Remove book';

const readButton = document.createElement('button');
readButton.setAttribute('type', 'button');
readButton.setAttribute('id', 'readbutton');
readButton.innerText = 'Read?';

const booksContainer = document.querySelector('#books-container');
booksContainer.appendChild(formCard);
formCard.appendChild(bookTitle);
formCard.appendChild(bookAuthor);
formCard.appendChild(bookPages);
formCard.appendChild(bookRead);
formCard.appendChild(removeButton);
formCard.appendChild(readButton);

removeButton.setAttribute('data-id', i);
readButton.setAttribute('data-id', i);
}

function createBookCard() {
for (let i = 0; i < myLibrary.length; i += 1) {
bookCard(i);
}
}

function emptyContainer() {
const booksContainer = document.querySelector('#books-container');
booksContainer.innerHTML = '';
}
// eslint-disable-next-line no-unused-vars
function addBookToLibrary() {
const title = document.getElementById('titleInput').value;
const author = document.getElementById('authorInput').value;
const pages = document.getElementById('pagesInput').value;
const read = document.getElementById('readCheckbox').checked;
const newBook = new Book(title, author, pages, read);
myLibrary.push(newBook);
emptyContainer();
createBookCard();
}

function removeBook(id) {
myLibrary.splice(id, 1);
}

const booksContainer = document.querySelector('#books-container');
booksContainer.addEventListener('click', (e) => {
if (e.target && e.target.id === 'removebutton') {
removeBook(e.target.dataset.id);
emptyContainer();
createBookCard();
}
});

function readCheck(id) {
if (myLibrary[id].read === 'already read') {
myLibrary[id].read = 'not yet read';
} else {
myLibrary[id].read = 'already read';
}
}

booksContainer.addEventListener('click', (e) => {
if (e.target && e.target.id === 'readbutton') {
readCheck(e.target.dataset.id);
emptyContainer();
createBookCard();
}
});