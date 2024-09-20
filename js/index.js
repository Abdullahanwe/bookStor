/// <reference types="../@types/jquery"/>
var bookName = document.getElementById("bookName");
var linkBook = document.getElementById("linkBook");
var contentTabel = document.getElementById("contentTabel");
var BtnClose = document.getElementById("btnClose")
var stopProp = document.getElementById("stopProp");


$('section').animate({width : '100%'},1000);
$('section').animate({height : '100vh' },1000);

//** setItem In LocalStorage  */

var container;
if (localStorage.getItem('container') != null) {
    container = JSON.parse(localStorage.getItem('container'));
    for (var x = 0; x < container.length; x++) {
        displaytabel(x);
    }
}

//** Add Element  */
function addBook() {
    if(bookName.classList.contains("is-valid")&& linkBook.classList.contains("is-valid")){
    var book = {
        name: bookName.value,
        link: linkBook.value
    }
    if (book.name == '' && book.link == '') {
        BtnClose.classList.replace('d-none', 'd-flex')
    } else {
        container.push(book);
        console.log(book.name);

        localStorage.setItem('container', JSON.stringify(container));
        clearForm()
        displaytabel();
        
    }}else{
        BtnClose.classList.replace('d-none', 'd-flex')

    }
}

//** ClearForm */

function clearForm() {
    bookName.value = '';
    linkBook.value = '';
}
function displaytabel() {
   
    var cartona = ``;
    for (var i = 0; i < container.length; i++) {
        cartona += `  
<tr>
    <td>${i + 1}</td>
    <td>${container[i].name}</td>
    <td><a href="${container[i].link}" class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</a></td>
    <td><button  onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> delete</button></td>
</tr>
`;
    }
    contentTabel.innerHTML = cartona;
}

//**DeletBook */

function deleteBook(index) {
    container.splice(index, 1);
    localStorage.setItem('container', JSON.stringify(container));
    displaytabel(container);
}

//** Validation Inpouts */

function vailadatInputs(element) {
    var regex = {
        bookName: /^\w{3,}(\s+\w+)*$/,
        linkBook: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    };
    
    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
    
    } else {
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
    
    }
}


function btnClose() {
    BtnClose.classList.add('d-none')

}
stopProp.addEventListener('click', function (e) {
    e.stopPropagation();
})