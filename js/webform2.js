/**
 * add action event on click that submit every to to console and print
 */

function productadder(){
    const productNum = document.querySelector("#productNumber").Value;
    const name = document.querySelector("#productName").Value;
    const unitPrice = document.querySelector("#UnitPrice").Value;
    const Quantity = document.querySelector("#quantity").Value;
    const supplier = document.querySelector("#supplier").Value;
    const date = document.querySelector("#date").Value;

    alert("productName:", productName);
}


const addPrdct = document.querySelector("#btnAddProduct");
addPrdct.addEventListener("click",( event => { 

    const productNum = document.querySelector("#productname").value;
    const name = document.querySelector("#productName").value;
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