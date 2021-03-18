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
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const booksContainer = document.querySelector('#books-container');
  booksContainer.appendChild(formCard)
  formCard.appendChild(title)
  formCard.appendChild(author)
  formCard.appendChild(pages)
  formCard.appendChild(read)

}