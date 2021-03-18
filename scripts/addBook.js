function addBookToLibrary() {
  title = document.getElementById('titleInput').value;
  author = document.getElementById('authorInput').value;
  pages = document.getElementById('pagesInput').value;
  read = document.getElementById('readCheckbox').value;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

console.log(myLibrary);

function createbookcard(){
  const formCard = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const bookRead = document.createElement('p');
  const removeButton = document.createElement('button');
  removeButton.setAttribute('type', 'button');
  removeButton.innerText = 'Remove book';

  const readButton = document.createElement('button');
  readButton.setAttribute('type', 'button');
  readButton.innerText = book.read ? 'Unread' : 'Read';

  const booksContainer = document.querySelector('#books-container');
  booksContainer.appendChild(formCard)
  formCard.appendChild(title)
  formCard.appendChild(author)
  formCard.appendChild(pages)
  formCard.appendChild(read)
  formCard.appendChild(removeButton)
  formCard.appendChild(readButton)




}