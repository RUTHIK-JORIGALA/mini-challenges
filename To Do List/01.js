const containerEl = document.querySelector(".container");
const inputEl = document.querySelector(".input");
const tasksEl = document.querySelector(".tasks");

let list = JSON.parse(localStorage.getItem("list"));
    if(list){
        list.forEach((task)=>{
            toDoList(task);
        });
    }


containerEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    toDoList();
});

function toDoList(task){
    let newTask = inputEl.value;

    const liEl = document.createElement("li");
    // if(task && task.checked){
    //     liEl.classList.add("checked");
    // }

    liEl.innerText = newTask;
    tasksEl.appendChild(liEl);
    inputEl.value = "";

    const checkEl = document.createElement("div");
    checkEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkEl);
    updateLocalStorage();

    const trashEl = document.createElement("div");
    trashEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashEl);

    checkEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashEl.addEventListener("click", ()=>{
        liEl.remove();
        updateLocalStorage();
    })

    updateLocalStorage();

}


function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    
    list = [];
    liEls.forEach( liE=>{
        list.push({
                name:liE.innerText,
                checked: liE.classList.contains("checked")
        });
    });
    localStorage.setItem("list",JSON.stringify(list));

}