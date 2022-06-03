
let myLibrary = [];


function Book(name, author, pages, read, id) {
    this.name = name
    this.id = id
    this.author = author
    this.pages = pages
    this.read = read
}

let bookone = new Book('test','matcko', '180','no', Date.now())
myLibrary.push(bookone);

function addBookToLibrary(ev) {
ev.preventDefault();

let book = 
    new Book(document.getElementById("name").value, 
    document.getElementById("author").value,
    document.getElementById("pages").value,
    'no',
    Date.now());


myLibrary.push(book);
document.forms[0].reset();
console.log(myLibrary)






}

function refresh(ev) {
    ev.preventDefault();

    for (let i = 0; i < myLibrary.length; i++) {
    
        let added = document.getElementById('added');
        let p[i] = document.createElement('p');
        p.innerHTML = myLibrary[i].name + "<br>";;
        added.append(p[i]);
       

      }
    }


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submit').addEventListener('click', addBookToLibrary);
});

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('refresh').addEventListener('click', refresh);
});