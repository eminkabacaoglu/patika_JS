let toDoList = document.querySelector("#list")
let toDo = document.querySelector("#task")
let localStorageList = localStorage.getItem('myList') ? JSON.parse(localStorage.getItem('myList')) : [];
var myNodelist = document.getElementsByTagName("LI");


let myList = JSON.parse(localStorage.getItem('myList'));

function listele(){
    myList.forEach(element => {
        let liDom = document.createElement("li")
        let span = document.createElement("span")
        span.addEventListener("click",deleteElement)
        liDom.addEventListener("click",doneElement)
        span.classList.add("close")
        span.innerHTML="x"
        liDom.innerHTML = element
        toDoList.appendChild(liDom)
        liDom.appendChild(span)
    });
}


function newElement(){
    toDo.value = toDo.value.trim()
    if(toDo.value===""){
        let toastfailed = document.querySelector(".error");
        let toastAlertfailed = new bootstrap.Toast(toastfailed);
        toastAlertfailed.show();
    }
    else{
        let liDom = document.createElement("li")
        liDom.innerHTML = toDo.value
        toDoList.appendChild(liDom)
        let span = document.createElement("span")
        span.classList.add("close")
        span.innerHTML="x"
        liDom.appendChild(span)
        localStorageList.push(toDo.value);
        localStorage.setItem('myList', JSON.stringify(localStorageList))
        toDo.value=""
        let toastsuccesful = document.querySelector(".toast");
        let toastAlertsuccesful = new bootstrap.Toast(toastsuccesful);
        toastAlertsuccesful.show();
    }
    
    
    
}
listele()

// function deleteElement(){
//     this.parentElement.style.display ="none"
//     let items = JSON.parse(localStorage.getItem("myList"));
//     console.log(this.parentElement.innerHTML)    
    

    
// }

// function doneElement(){
//     this.classList.toggle('checked')
    
    
// }

