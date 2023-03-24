const hr = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function UpdateDate(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    if(h > 12){
        h = h -12;
        ampm.innerHTML = "PM";
    }
    //if adding 0 to the number if it is single digit
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hr.innerHTML = h
    min.innerHTML = m;
    sec.innerHTML = s;

    setTimeout(()=>{
        UpdateDate()
    },1000);

}
UpdateDate();
