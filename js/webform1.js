/**
 * add action event on click that submit every to to console and print
 */
// const button = document.querySelector(".btn");



// button.addEventListener("click",(x => {
//     const Email_address =  document.querySelector("#email").value ;
//     const Password = document.querySelector("#pass").value ;
//     const URL = document.querySelector("#url").value ;

//     console.log("Email_address:", Email_address ,'\n',
//                 "Password: ", Password , '\n',
//                  "URL: ", URL );
     
// }));

// using Jquery

$(document).ready(function(){
    const submitbutton = $(".btn.btn-primary");
    submitbutton.on("click",postOnConsole);
    function postOnConsole(evt){
        evt.preventDefault();
        const Email_address = $("#exampleInputEmail1").val();
        const Password = $("#exampleInputPassword1").val() ;
        const URL = $("#exampleInputURL1").val();

        console.log("Email_address:", Email_address ,'\n',
                    "Password: ", Password , '\n',
                    "URL: ", URL );
        $("input").val("");
                  
}
});