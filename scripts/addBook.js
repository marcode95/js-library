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
  const formCard = document.createElement('div')
  const title = document.createElement('h1')