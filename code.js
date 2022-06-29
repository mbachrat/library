
let myLibrary = [];

//constructor
function Book(name, author, pages, read, id) {
    this.name = name
    this.id = id
    this.author = author
    this.pages = pages
    this.read = read
}

//tested book in array
let bookone = new Book('test','matcko', '180','no', Date.now())
myLibrary.push(bookone);

//function that takes form inputs 
function addBookToLibrary(ev) {
ev.preventDefault();

document.querySelector("#book-form").addEventListener('submit', (e) => {
    e.preventDefault();
    let book = 
    new Book (document.getElementById("name").value, 
    document.getElementById("author").value,
    document.getElementById("pages").value,
    'no',
    Date.now());

    document.forms[0].reset();
    console.log(book);
    addBookToList(book);
})



myLibrary.forEach(book => addBookToList(book)) //not ready



}

function addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `<td>${book.name}</td>
    <td>${book.author}</td>
    <td><label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
  </label></td>
    <td><a class="delete">X</a></td>`
     
    
    list.appendChild(row);
    
}

//function trying to paste form inputs to HTML
function refresh(ev) {
    ev.preventDefault();

let lib = document.getElementById("added");
let booked = document.createElement('p')
booked.textContent = myLibrary[myLibrary.length-1].name;
lib.appendChild(booked);
    
    
}


document.addEventListener('DOMContentLoaded', addBookToLibrary);

function deleteBook(el) {
  
    if(el.className.includes('delete')) {
        el.parentElement.parentElement.remove();

        alert("Book Deleted")
    }
}



//remove book
document.querySelector('#book-list').addEventListener('click', (e)=> {
    console.log(e.target)
    deleteBook(e.target)
});
