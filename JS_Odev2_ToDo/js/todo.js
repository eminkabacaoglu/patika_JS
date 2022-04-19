let toDoList = document.querySelector("#list")
     
let localListele =  function(){
    let myList = JSON.parse(localStorage.getItem("myList"))
    if(!myList){
        localStorage.setItem("myList", JSON.stringify([])) 
    }
    else{
        for (let i = 0; i < myList.length; i++) {
            function newElementForLocal() {
                let liDom = document.createElement("li")
                liDom.innerHTML=myList[i].val
                toDoList.appendChild(liDom)

                if (myList[i].checked == true) {
                    liDom.classList.add("checked")
                } else {
                    liDom.classList.remove("checked")
                }
            
            }
            newElementForLocal()
        }
    }
}

localListele()

let listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {                         
    let span = document.createElement("span");                       
    let del = document.createTextNode("x");                        
    span.className = "close";                                        
    span.appendChild(del);                                         
    listItems[i].appendChild(span);                                  
}


let close = document.getElementsByClassName("close");
// Delete item

function delItem(){
    for (let i = 0; i < close.length; i++) {                                            
        close[i].onclick = function () {                                                
                                        
            this.parentElement.style.display = "none";                                  
                          
            let textIcerik = this.parentElement.textContent.slice(0, this.parentElement.textContent.length - 1);   
    
            let myList = JSON.parse(localStorage.getItem("myList"));                     
            myList = myList.filter(item => item.val != textIcerik);             
            localStorage.setItem("myList", JSON.stringify(myList))                       
        }
    }
}

delItem()


function newElement(){
    
    let newLi = document.createElement("li");                                      
    let item = document.querySelector("#task");                    
    let itemValue = document.createTextNode(item.value);
    item.value = item.value.trim();
    if (item.value === "") { 
        let toastfailed = document.querySelector(".error");
        let toastAlertfailed = new bootstrap.Toast(toastfailed);
        toastAlertfailed.show();                                             
    } else {
        newLi.appendChild(itemValue);
        toDoList.appendChild(newLi)
        let myList = {
            val: item.value,
            checked: false
        }
        let myLists = JSON.parse(localStorage.getItem("myList"));
        myLists.push(myList);                                                               
        localStorage.setItem("myList", JSON.stringify(myLists));      
        let toastsuccesful = document.querySelector(".toast");
        let toastAlertsuccesful = new bootstrap.Toast(toastsuccesful);
        toastAlertsuccesful.show();    
        
    }
    item.value="";

    let span = document.createElement("span");                                  
    let del = document.createTextNode("x");                                     
    span.className = "close";                                                   
    span.appendChild(del);                                                      
    newLi.appendChild(span);

    for (let i = 0; i < close.length; i++) {                                        
        close[i].onclick = function () {                                            
                                                   
            this.parentElement.style.display = "none";                              
        }
    }
    delItem()      
}

toDoList.addEventListener("click",checked,false)

function checked(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked"); 
        let textIcerik = e.target.textContent.slice(0,e.target.textContent.length-1)
        let myList = JSON.parse(localStorage.getItem("myList"))

        if(e.target.classList.contains("checked") == true){
            myList.forEach(item => {
                if (item.val == textIcerik) {
                    item.checked = true;
                };
                localStorage.setItem("myList", JSON.stringify(myList));
            });
        }
        else if(e.target.classList.contains("checked") == false){
            myList.forEach(item => {
                if (item.val == textIcerik) {
                    item.checked = false;
                };
                localStorage.setItem("myList", JSON.stringify(myList));
            });
        }


    }
    
}