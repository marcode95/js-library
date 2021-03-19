let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read) {
    this.read = 'already read';
    }
  else {
    this.read = 'not yet read';
  }
  info = function() {
    return(title + ' by ' + author + ', ' + pages + ' pages, ' + readyet);
  }
}

// const newbook = new Book('bible', 'jesus', '400', true);
// myLibrary.push(newbook);

const removeButton = document.getElementById('#removebutton');
removeButton.addEventListener("click", (e) => {
  removeBook(e.target.dataset.id);
  emptyContainer();
  createBookCard();
});

function removeBook(id){
  myLibrary.splice(id, 1);
}
const readButton = document.getElementById('#readbutton');
readButton.addEventListener("click", (e) => {
  readCheck(e.target.dataset.id);
  emptyContainer();
  createBookCard();
});

function readCheck(id){
  myLibrary[id].read
  if (myLibrary[id].read === 'already read')
    {myLibrary[id].read = 'not yet read'}
      else {
        myLibrary[id].read = 'already read'
      }
}


