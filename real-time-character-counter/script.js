const textEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");


textEl.addEventListener("keyup",()=>{
    updateCounter();
});
updateCounter();

function updateCounter(){
    totalEl.innerText = textEl.value.length;
    remainingEl.innerText = textEl.getAttribute("maxLength")-textEl.value.length;
}