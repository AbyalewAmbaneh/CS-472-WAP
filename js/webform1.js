/**
 * add action event on click that submit every to to console and print
 */
const button = document.querySelector(".btn");

const area = document.querySelector("div");


button.addEventListener("click",(x => {
    const Email_address =  document.querySelector("#email").value ;
    const Password = document.querySelector("#pass").value ;
    const URL = document.querySelector("#url").value ;

    console.log("Email_address:", Email_address ,'\n',
                "Password: ", Password , '\n',
                 "URL: ", URL );
     
}));

area.addEventListener("mouseover", x =>
        area.classList.add("hovering"));
