form = document.querySelector('form') ;
//Storage Part

const storeList =()=>{
    window.localStorage.todoList = list.innerHTML ;
}

//getTodos
const getTodos =()=>{
    if (window.localStorage.todoList){
        list.innerHTML = window.localStorage.todoList ;
    }else{
        list.innerHTML = `<li>Cliquez pour suprimer un texte</li>`
    }
}


window.addEventListener("load",getTodos()) ;

//Add Event

form.addEventListener("submit" ,(e)=>{
     e.preventDefault();
     list.innerHTML +=`<li>${item.value}</li>`
     item.value = "" ;
     storeList() ;

    
})

list.addEventListener("click",(e)=>{
    if (e.target.classList.contains("checked")){
        e.target.remove()
    }else{
        e.target.classList.add("checked") ;

    }
    
    ;
    storeList() ;
})

