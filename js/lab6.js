window.onload = function(){'use strict';
/**
 * 
 */
 const button = document.querySelector("button");
 const button2 = document.getElementById("big");
 button.addEventListener("click",  x =>
    alert("Hello, World!"));

var ck = false;
button.addEventListener("click", event =>{
    if( ck === false ){
        document.querySelector("#textar").classList.add("bigtext");
        ck = true;
        }
    else{
    document.querySelector("#textar").classList.remove("bigtext") ;
        ck = false;
}})

const chkbox = document.querySelector("#checkbox");

var ch = false;
chkbox.addEventListener("change", x =>{
    if(ch === false ){
    document.querySelector("#textar").classList.add("blingtxt");
    ch = true;    
}
    else{
        document.querySelector("#textar").classList.remove("blingtxt");
        ch = false; 
    }
});

let textArea = document.getElementById("textar");
button2.addEventListener("click", () => {
    setInterval(function () {
        textArea.style.fontSize = parseInt(textArea.style.fontSize) + 2 + "pt";
    }, 500)
});


}