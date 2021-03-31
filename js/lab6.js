window.onload = function(){'use strict';
/**
 * 
 */
 const button = document.querySelector("button");
 
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

function  increament(a,b){     
    a = parseInt(a) + b;
    return a + "px"; 
};




// button.addEventListener("click", event =>{
//     setInterval(function(){
//         let size = document.querySelector("#textar").style.fontSize;
//         let newSize = parseInt(size) + 2;
//         size = newSize + "px";
//         document.querySelector("#textar").style.fontSize = size;
//     },3000)
//    })





}