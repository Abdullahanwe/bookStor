
var bookName= document.getElementById("bookName");
var linkBook= document.getElementById("linkBook");
var contentTabel=document.getElementById("contentTabel");




var container;
if(localStorage.getItem('container')!=null){
container=JSON.parse(localStorage.getItem('container'));
for (var x = 0; x < container.length; x++) {
    displaytabel( x);
  }
}else{
    container=[];
}


function addBook(){
var book={
    name:bookName.value,
    link:linkBook.value
}  
container.push(book);
localStorage.setItem('container',JSON.stringify(container));
clearForm()
displaytabel();
}
function clearForm(){
    bookName.value='';
    linkBook.value='';
}
function displaytabel(){
    
 var cartona = ``;
    for(var i=0;i<container.length;i++){
 cartona +=`  
<tr>
    <td>${i+1}</td>
    <td>${container[i].name}</td>
    <td><a href="${container[i].link}" class="btn btn-visit"><i class="fa-solid fa-eye"></i> Visit</a></td>
    <td><button  onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i> delete</button></td>
</tr>
`;
}

contentTabel.innerHTML=cartona;
}

function deleteBook(index) {
    container.splice(index,1);
    localStorage.setItem('container',JSON.stringify(container));
    displaytabel(container);
}

function vailadatInputs(element){
    console.log(element.value,element.id);
    var regex={
        bookName:/^\w{3,}(\s+\w+)*$/,
        linkBook:/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
    }
    if(    regex[element.id].text(element.value)){
        element.classList.add('is-vaild');
        element.classList.remove('is-invaild');
        
        // console.log("truwe");
    }else{
        element.classList.add('is-invaild');
        element.classList.remove('is-vaild');


        // console.log("false");
    }
}

