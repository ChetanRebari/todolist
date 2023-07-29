let btn=document.querySelector("button");
// // console.log(btn)
let addtodo=document.querySelector(".add-todo")
// // console.log(addtodo)
let todolist=document.querySelector(".todo-list");
// // console.log(dodolist)





btn.addEventListener("click",()=>{
    
    let createelement=document.createElement("li");
    createelement.textContent=addtodo.value;
    // console.log(createelement)
    let spancreate=document.createElement("span");
        spancreate.textContent="\u00d7";

        createelement.appendChild(spancreate)
        todolist.prepend(createelement); 


    addtodo.value="";

    spancreate.addEventListener("click",()=>{
        // console.log("span clicked")
        createelement.remove()
    })
});














    

   












