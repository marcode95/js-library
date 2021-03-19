function addBookToLibrary() {
  title = document.getElementById('titleInput').value;
  author = document.getElementById('authorInput').value;
  pages = document.getElementById('pagesInput').value;
  read = document.getElementById('readCheckbox').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  emptyContainer();
  createBookCard();
}

console.log(myLibrary);

function emptyContainer() {
  const booksContainer = document.querySelector('#books-container');
  booksContainer.innerHTML = ''
}


function createBookCard(){
  for (let i=0; i < myLibrary.length; i++) {
    const formCard = document.createElement('div');
    formCard.setAttribute('data-id',i)

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
    removeButton.setAttribute('data-id', i)
    removeButton.innerText = 'Remove book';

    const readButton = document.createElement('button');
    readButton.setAttribute('type', 'button');
    readButton.setAttribute('id', 'readbutton');
    readButton.setAttribute('data-id', i)
    readButton.innerText = Book.read ? 'Unread' : 'Read';

    const booksContainer = document.querySelector('#books-container');
    booksContainer.appendChild(formCard)
    formCard.appendChild(bookTitle)
    formCard.appendChild(bookAuthor)
    formCard.appendChild(bookPages)
    formCard.appendChild(bookRead)
    formCard.appendChild(removeButton)
    formCard.appendChild(readButton)
  }
}
