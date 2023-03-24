const containerEl = document.querySelector(".container");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".tasks");

let list = JSON.parse(localStorage.getItem("list"));
    if (list){
        list.forEach((task)=>{
            toDoList(task);
        })
    }

containerEl.addEventListener("submit",(event) =>{
   // console.log(inputEl.value);
    event.preventDefault();
   toDoList();
});

function toDoList(){
    let newTask = inputEl.value;

    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkbtnEl = document.createElement("div");
    checkbtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkbtnEl);

    const trashbtnEl = document.createElement("div");
    trashbtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashbtnEl);

    checkbtnEl.addEventListener("click",() =>{
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashbtnEl.addEventListener("click", () =>{
        liEl.remove();
        // ulEl.remove();
        updateLocalStorage()
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
     list = [];
    liEls.forEach(liEl =>{
        list.push({
            name:liEl.innerHTML, 
            checked: liEl.classList.contains("checked")
        });
    }); // semicolons are optional in js
    
    localStorage.setItem("list",JSON.stringify(list));
}
