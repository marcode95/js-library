function addBookToLibrary() {
  let title = window.prompt("Enter title: ");
  let author = window.prompt("Enter author: ");
  let pages = window.prompt("Enter pages: ");
  let answer = window.confirm("Press OK if you already read this book! Cancel if you didn't!");
    if (answer) {
      read = true;
    }
    else {
      read = false;
    }
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);