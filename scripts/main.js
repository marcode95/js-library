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

const removeButton = document.querySelector('#books-container');
removeButton.addEventListener("click", (e) => {
  removeBook(e.target.dataset.id);
  emptyContainer();
  createBookCard();
});

function removeBook(id){
  myLibrary.splice(id, 1);
}


// const newbook = new Book('bible', 'jesus', '400', true);
// myLibrary.push(newbook);
