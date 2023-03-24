const kits = ["crash","kick","snare","tom"];
const mainEl = document.querySelector(".main");

kits.forEach((kit) =>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText=kit;
    btnEl.style.backgroundImage = "url(Images/"+ kit +".png)";
    mainEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.classList.add("audio");
    audioEl.src = "sounds/"+ kit +".mp3";
    mainEl.appendChild(audioEl);
    btnEl.addEventListener("click",() =>{
        audioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(() =>{
            btnEl.style.transform = "scale(1)";
        },100);
    });
    window.addEventListener("keydown",(event) =>{
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() =>{
                btnEl.style.transform = "scale(1)";
            },100);
        }
    });
}); 