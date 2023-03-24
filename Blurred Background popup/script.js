const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const closeiconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");

})
closeiconEl.addEventListener("click", ()=>{
    popupContainerEl.classList.add("active");
    containerEl.classList.remove("active");
})