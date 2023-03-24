
let inputEl = document.querySelector("input");
let btnEl = document.querySelectorAll(".btn");
const btnacEl = document.getElementsByClassName("btnac");
string = "";

Array.from(btnEl).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value =  e.target.innerHTML;
        if(value != "AC" && value != "="){
            if(string == "0"){
                string = string.toString();
                string = string.slice(1);
            }
            string += value;
            console.log(string);
            inputEl.value = string;
        }
        else if(value == "AC"){
            string=""
            inputEl.value = string;
        }
        else if(value == "="){
            string = eval(string);
            inputEl.value=string;
        }
    });
})



