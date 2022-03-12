//SaveOrUpdate Functions ...(Customer) Need To redesign
clearValidation();

$("#btnSaveOrUpdate").click(function () {
    //gather customer information
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerTP = $("#txtCusTP").val();
    let nullVal='';
    if(customerID==nullVal||customerName==nullVal||customerAddress==nullVal||customerTP==nullVal){
        alert("warning-Please Input Data Correctly To Continue..");
        return;
    }
    let index=isExists(customerID);
    if(index!=-1){
        alert("Customer Updated");
        customer[index].setCustomerName(customerName);
        customer[index].setCustomerAddress(customerAddress);
        customer[index].setCustomerTelephone(customerTP);
        loadAllCustomers()
        bindEvent();
        return;
    }
    //Add To DB..
    let c1=new Customer(customerID,customerName,customerAddress,customerTP);
    customer.push(c1);
    loadAllCustomers();
    bindEvent();
    clearFieldsCus();
});

//Search Function Search bar..
$("#btnSearch").click(function () {
    //gather Address Or ID
    let property=$("#srcCusID").val();
    let index=isExists(property,property);
    if(index!=-1){
        alert("Customer Found");
        $("#txtCusID").val(customer[index].getCustomerID());
        $("#txtCusName").val(customer[index].getCustomerName());
        $("#txtCusAddress").val(customer[index].getCustomerAddress());
        $("#txtCusTP").val(customer[index].getCustomerTelephone());
        return;
    }
    alert("Customer Not Found");
});

//Delete Function ..
$("#btnDelete").click(function () {
    let customerID=$("#txtCusID").val();
    let index=isExists(customerID);
    if(index!=-1){
        customer.splice(index,1);
        loadAllCustomers();
        alert("Customer "+customerID+" Deleted");
        clearFieldsCus();
        return;
    }
    alert("No Customer Found");
});

function clearFieldsCus() {
    $("#txtCusID").val('');
    $("#txtCusName").val('');
    $("#txtCusAddress").val('');
    $("#txtCusTP").val('');
    $("#srcCusID").val('');
}

function isExists(id,address){
    let x=-1;
    for(let i=0;i<customer.length;i++){
        if(customer[i].getCustomerID()==id||customer[i].getCustomerAddress()==address) {
            x = i;
        }
    }
    return x;
}

function loadAllCustomers() {
    $("#customerTable>tr").remove();
    for(let i=0;i<customer.length;i++){
        let customerID=customer[i].getCustomerID();
        let customerName=customer[i].getCustomerName();
        let customerAddress=customer[i].getCustomerAddress();
        let customerTP=customer[i].getCustomerTelephone();
        let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerTP}</td></tr>`;
        $("#customerTable").append(row);
    }

}
function bindEvent() {
    //bind the event after the row was added
    $("#customerTable>tr").off("click");
    $("#customerTable>tr").click(function(){
        let Row=$(this);
        let CustomerID = $(Row.children().get(0)).text();
        let CustomerName = $(Row.children().get(1)).text();
        let CustomerAddress = $(Row.children().get(2)).text();
        let CustomerTP = $(Row.children().get(3)).text();
        //Assignment
        $("#txtCusID").val(CustomerID);
        $("#txtCusName").val(CustomerName);
        $("#txtCusAddress").val(CustomerAddress);
        $("#txtCusTP").val(CustomerTP);
    });
}

function clearValidation() {
    $("#validationTextId").css('display','none');
    $("#validationTextName").css('display','none');
    $("#validationTextAddress").css('display','none');
    $("#validationTextTp").css('display','none');
}

//Validation-Customer.Id
let RegExCusID=/^(C00-)[0-9]{3,4}$/;
$("#txtCusID").keyup(function () {
    if($("#txtCusID").val()==''){
        $("#validationTextId").css('display','none');
        $("#txtCusID").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtCusID").val();
    if(RegExCusID.test(input)){
        $("#txtCusID").css('border','2px solid green');
        $("#validationTextId").css('display','none');
    }
    else{
        $("#txtCusID").css('border','2px solid red');
        $("#validationTextId").css('display','block');
    }
});
//Validation-Customer.Name
let RegExCusName=/^[A-z]{5,10}$/;
$("#txtCusName").keyup(function () {
    if($("#txtCusName").val()==''){
        $("#validationTextName").css('display','none');
        $("#txtCusName").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtCusName").val();
    if(RegExCusName.test(input)){
        $("#txtCusName").css('border','2px solid green');
        $("#validationTextName").css('display','none');
    }
    else{
        $("#txtCusName").css('border','2px solid red');
        $("#validationTextName").css('display','block');
    }
});

//Validation-Customer.address
let RegExCusAddress=/^(No.)[0-9]{2} [A-z]{4,100}$/;
$("#txtCusAddress").keyup(function () {
    if($("#txtCusAddress").val()==''){
        $("#validationTextAddress").css('display','none');
        $("#txtCusAddress").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtCusAddress").val();
    if(RegExCusAddress.test(input)){
        $("#txtCusAddress").css('border','2px solid green');
        $("#validationTextAddress").css('display','none');
    }
    else{
        $("#txtCusAddress").css('border','2px solid red');
        $("#validationTextAddress").css('display','block');
    }
});

//Validation-Customer.TP
let RegExCusTP=/^(07)[0-9]{8,9}$/;
$("#txtCusTP").keyup(function () {
    if($("#txtCusTP").val()==''){
        $("#validationTextTp").css('display','none');
        $("#txtCusTP").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtCusTP").val();
    if(RegExCusTP.test(input)){
        $("#txtCusTP").css('border','2px solid green');
        $("#validationTextTp").css('display','none');
    }
    else{
        $("#txtCusTP").css('border','2px solid red');
        $("#validationTextTp").css('display','block');
    }
});

