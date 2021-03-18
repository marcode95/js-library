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
