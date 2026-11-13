const myLibrary = [];
const library = document.querySelector(".library")
const button = document.querySelector("#new")
const dialog = document.querySelector("dialog")
const form = document.querySelector("form")
function Book (title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function (){
    this.read = !this.read
}
function addBookToLibrary (title, author, pages, read){
    const book = new Book (title, author, pages , read);
    myLibrary.push(book);
}

addBookToLibrary("book", "wani" , 234 , false);
addBookToLibrary("bo", "wai" , 244 , true);

console.log(myLibrary)
function display(){
    library.innerHTML = "";
    myLibrary.forEach((item)=>{
        const remove = document.createElement("button")
        remove.textContent = "Remove"
        remove.dataset.id = item.id
        remove.addEventListener("click", (e)=>{
            const index = myLibrary.findIndex(b => b.id === remove.dataset.id)
            myLibrary. splice(index,1)
            display()
        })
        const toggle = document.createElement("button")
        toggle.textContent = "Toggle read";
        toggle.dataset.id = item.id;
        toggle.addEventListener("click" , ()=>{
            const book =myLibrary.find(b => b.id === toggle.dataset.id)
            book.toggleRead()
            display()
        })
        const cards = document.createElement("div")
        cards.classList.add("card")
        const tit = document.createElement("p")
        tit.textContent= item.title
        const aut = document.createElement("p")
        aut.textContent = item.author
        const pag = document.createElement("p")
        pag.textContent = item.pages
        const rea = document.createElement("p")
        rea.textContent = item.read ? "Read" : "Not read"
        cards.append(tit , aut ,pag ,rea, remove, toggle)
        library.appendChild(cards)
    })
}
display()

button.addEventListener("click" , ()=>{
    dialog.showModal();
}
);

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const title = document.getElementById("t").value;
    const author = document.getElementById("a").value;
    const pages = document.getElementById("p").value;
    const status = document.getElementById("r").checked;
    addBookToLibrary(title,author,pages,status)
    display()
    console.log(myLibrary)
    dialog.close()
    form.reset()
})
