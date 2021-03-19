const booksContainer = document.querySelector('#books-container')
booksContainer.addEventListener("click", (e) => {
  if(e.target && e.target.id == 'removebutton') {
    removeBook(e.target.dataset.id);
    emptyContainer();
    createBookCard();
  }
});

function removeBook(id){
  myLibrary.splice(id, 1);
}

booksContainer.addEventListener("click", (e) => {
  if(e.target && e.target.id == 'readbutton') {
    readCheck(e.target.dataset.id);
    emptyContainer();
    createBookCard();
  } 
});

function readCheck(id){
  myLibrary[id].read
  if (myLibrary[id].read === 'already read')
    {myLibrary[id].read = 'not yet read'}
  else {
    myLibrary[id].read = 'already read'
    }
}