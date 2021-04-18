/**
 * minibankapp.js
 */
"use strict";
$(function(){
    const CustomeList = [];
    function Customer(accountNO,customerName,typeOfAccount){
        this.accountNO = accountNO;
        this.customerName = customerName;
        this.typeOfAccount = typeOfAccount;
    };

    $("#formNewAccount").on("submit",addNewRow);
    var counter = 0; 
    
    function addNewRow(event){
        event.preventDefault();
        let accountNoTxt = $("#txtAccountNo").val();
        let customerNameTxt = $("#txtCustomerName").val();
        let typeOfAccountTxt = $("#ddlAccountType").val();     
        const newCustomer = new Customer(accountNoTxt,customerNameTxt,typeOfAccountTxt);
        CustomeList.push(newCustomer);          
        let newRow = `<tr id="${typeOfAccountTxt}"><td>${++counter}</td><td>${accountNoTxt}</td><td>${customerNameTxt}</td><td>${typeOfAccountTxt}</td></tr>`
        $("table tbody").append(newRow);   
        $("#txtAccountNo").val("");
        $("#txtCustomerName").val("");
        $("#ddlAccountType").val("");
        
    console.log(CustomeList)
    }  

    $("#btnSavings").click(function(){       
        let checked = $(this).is(':checked');
        if(checked){
            $("#tblAccounts tr").filter(function() {                
                $(this).toggle($(this).text().toLowerCase().indexOf("savings") > -1)                
              });             
        }
        else{
            $("#tblAccounts tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf("") > -1)
              });
        }
    });

    $("#btnLone").click(function(){       
        let checked = $(this).is(':checked');
        if(checked){
            $("#tblAccounts tr").filter(function() {                
                $(this).toggle($(this).text().toLowerCase().indexOf("loan") > -1)                
              });             
        }
        else{
            $("#tblAccounts tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf("") > -1)
              });
        }
    });
    
    $("#btnChecking").click(function(){        
        let checked = $(this).is(':checked');
        if(checked){
            $("#tblAccounts tr").filter(function() {                
                $(this).toggle($(this).text().toLowerCase().indexOf("checking") > -1)                
              });             
        }
        else{
            $("#tblAccounts tbody tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf("") > -1)
              });
        }
    });    
});
















































// window.onload = function() {
//     let currentRowId = 2;
//     const formNewAccount = document.querySelector("#formNewAccount");
//     formNewAccount.addEventListener("submit", 
//         event => {
//             event.preventDefault();
//             const txtAccountNo = document.querySelector("#txtAccountNo");
//             const txtCustomerName = document.querySelector("#txtCustomerName");
//             const ddlAccountType = document.querySelector("#ddlAccountType");

            
//             const strAccountNo = txtAccountNo.value;
//             const strCustomerName = txtCustomerName.value;
//             const strAccountType = ddlAccountType.value;
//             addNewAccountDataRow(strAccountNo, strCustomerName,strAccountType);
//             txtAccountNo.value = "";
//             txtCustomerName.value = "";
//             ddlAccountType["selectedIndex"] = 0;
//             txtAccountNo.focus();
//     });
//     const addNewAccountDataRow = function(accountNo, customerName, accountType) {
//         const tblAccounts = document.querySelector("#tblAccounts");
//         const newRow = tblAccounts.insertRow(-1);

//         const newCellRowId = newRow.insertCell(0);
//         const strNewRowId = document.createTextNode(`${++currentRowId}.`);
//         newCellRowId.appendChild(strNewRowId);

//         const newCellAccountNo = newRow.insertCell(1);
//         const strNewRowAccountNo = document.createTextNode(`${accountNo}`);
//         newCellAccountNo.appendChild(strNewRowAccountNo);

//         const newCellCustomerName = newRow.insertCell(2);
//         const strNewRowCustomerName = document.createTextNode(`${customerName}`);
//         newCellCustomerName.appendChild(strNewRowCustomerName);

//         const newCellAccountType = newRow.insertCell(3);
//         const strNewRowAccountType = document.createTextNode(`${accountType}`);
//         newCellAccountType.appendChild(strNewRowAccountType);
//     }
// }