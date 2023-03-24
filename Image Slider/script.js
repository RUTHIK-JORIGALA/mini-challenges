const nxtEl = document.querySelector(".right");
const prevEl = document.querySelector(".left");
const imgcontainerEl = document.querySelector(".imgcontainer");
const imgEl = document.querySelectorAll("img");

 let imglen = 1;
 let timeout;

nxtEl.addEventListener("click",() =>{
    clearTimeout(timeout);
    updateImg();
    imglen++;
});

prevEl.addEventListener("click", () =>{
    imglen--;
    updateImg();
    clearTimeout(timeout);
});


updateImg();
function updateImg(){
    if(imglen > imgEl.length ){
        imglen = 1;
    }
    else if(imglen < 1){
        imglen = imgEl.length;
    }
    imgcontainerEl.style.transform = `translateX(-${(imglen-1) * 500}px`;

    timeout = setTimeout(()=>{
        imglen++;
        updateImg();
    },3000);
    
}

