/**
 * add action event on click that submit every to to console and print
 */

function productadder(){
    const productNum = document.querySelector("#productname").Value;
    const name = document.querySelector("#name").Value;
    const unitPrice = document.querySelector("#UnitPrice").Value;
    const passWord = document.querySelector("#Password").Value;
    const supplier = document.querySelector("#productname").Value;
    const date = document.querySelector("#Supplier").Value;

    alert("productName:", productName);
}


const addPrdct = document.querySelector("#addProduct");
addPrdct.addEventListener("click",( event => { 

    const productNum = document.querySelector("#productname").value;
    const name = document.querySelector("#name").value;
    const unitPrice = document.querySelector("#UnitPrice").value;    
    const supplier = document.querySelector("#productname").value;
    const date = document.querySelector("#Supplier").value;

        var win = window.open("about:blank", null, "width=400,height=300");
        var doc = win.document;
        doc.open("text/html");
        doc.write( "productNumber: ", productNum , "<br>", 
                "Name: ", name, "<br>",
                "Unit Price: ", unitPrice, "<br>",
                "Supplier: ", supplier, "<br>",                
                "Date: ", date, "<br>",           
           );
        doc.close();}
));