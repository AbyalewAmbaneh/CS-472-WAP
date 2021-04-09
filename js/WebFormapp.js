
$("document").ready( function(){

    $("#btnAddProduct").on("click",displayAsDiv);
    function displayAsDiv(evt){
        evt.preventDefault();
        const ProductNumber = $("#productNumber").val();   
        const Quantity = $("#quantity").val();
        const Name = $("#productName").val();
        const Supplier = $("#supplier").val();
        const Unit_Price = $("#UnitPrice").val();
        const Date_supplied = $("#date").val()
        $("#submitedContent").append(`<div> <ul> <li>ProductNumber: ${ProductNumber} </li>  <li> Quantity:${Quantity} </li>  <li> Name: ${Name} </li>  <li> Supplier: ${Supplier} </li>  <li> Unit_Price: ${Unit_Price} </li> <li>  Date_supplied: ${Date_supplied} </li></ul> </div>`)
        };
});

