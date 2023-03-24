const btnEl = document.getElementById("btn");
const inputEl = document.querySelector(".input");
const iconEl = document.querySelector(".icon");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click",()=>{
    createpassword();
});

iconEl.addEventListener("click",() =>{
    copyPassword();
    if(inputEl.value){
        alertEl.classList.remove("active");
        setTimeout(() =>{
            alertEl.classList.add("active");
        }, 2000)
    }
    
});

function createpassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for(let i = 0; i < passwordLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
      //  console.log(password);
    }
    console.log(password);
    inputEl.value = password;
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999); //for mobile
    navigator.clipboard.writeText(inputEl.value);
}
