//Search Customer And Fill..
$("#btnSearchCus").click(function () {
    if($("#txtCusIDForSearch").val()==''){
        alert("Please Add Data to Search");
        return;
    }
    searchCustomerById($("#txtCusIDForSearch").val());
});

//Search item and fill
$("#btnSearchItem").click(function () {
    if($("#txtItemCodeForSearch").val()==''){
        alert("Please Add Data to Search");
        return;
    }
    serchItemById($("#txtItemCodeForSearch").val());
});
//Fill Table With Items..
let tempTotal=0;
$("#btnAddItem").click(function () {
    //Logic For Add Item To Table.
    let ItemTot=$("#txtItemPriceResult").val() * $("#txtQtyForAdd").val();
    tempTotal=tempTotal+ItemTot;
    let rowItem = `<tr><td>${$("#txtItemCodeForSearch").val()}</td><td>${$("#txtItemNameResult").val()}</td><td>${$("#txtItemPriceResult").val()}</td><td>${$("#txtQtyForAdd").val()}</td><td>${ItemTot}</td></tr>`;
    $("#itemTableForViewOnOrder").append(rowItem);
    $("#txtDisplayTotal").text('Total: '+tempTotal+'/=');
});

function serchItemById(Itid) {
    for(let i=0;i<item.length;i++){
        if(item[i].getItemCode()==Itid){
            $("#txtItemNameResult").val(item[i].getItemName());
            $("#txtItemQtyResult").val(item[i].getItemQty());
            $("#txtItemPriceResult").val(item[i].getItemPrice());
            return;
        }
    }
}

function searchCustomerById(id) {
    for(let i=0;i<customer.length;i++){
        if(customer[i].getCustomerID()==id){
            $("#txtCusNameResult").val(customer[i].getCustomerName());
            $("#txtCusAddressResult").val(customer[i].getCustomerAddress());
            $("#txtCusSalaryResult").val(customer[i].getCustomerTelephone());
            return;
        }
    }
}

//Validation Order.Id
let RegExOrderId=/^O[0-9]{2}-[0-9]{3}$/;
$("#txtOrderId").keyup(function () {
    if($("#txtOrderId").val()==''){
        $("#txtOrderId").css('border','1px solid #ced4da');
        return;
    }
    let input=$("#txtOrderId").val();
    if(RegExOrderId.test(input)) {
        $("#txtOrderId").css('border','2px solid green');
    }
    else {
        $("#txtOrderId").css('border','2px solid red');
    }
});

//Validation Order.date
let RegExOrderDate=/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
$("#txtOrderDate").keyup(function () {
    if($("#txtOrderDate").val()==''){
        $("#txtOrderDate").css('border','1px solid #ced4da');
        return;
    }
    let input=$("#txtOrderDate").val();
    if(RegExOrderDate.test(input)){
        $("#txtOrderDate").css('border','2px solid green');
    }
    else {
        $("#txtOrderDate").css('border','2px solid red');
    }
});

//Validation Order.Customer
let RegExCusIdForSearch=/^(C00-)[0-9]{3,4}$/;
$("#txtCusIDForSearch").keyup(function () {
    if($("#txtCusIDForSearch").val()==''){
        $("#txtCusIDForSearch").css('border','1px solid #ced4da');
        $("#btnSearchCus").css('cursor','not-allowed');
        return;
    }
    let input =$("#txtCusIDForSearch").val();
    if(RegExCusIdForSearch.test(input)){
        $("#txtCusIDForSearch").css('border','2px solid green');
        $("#btnSearchCus").css('cursor','pointer');
    }
    else{
        $("#txtCusIDForSearch").css('border','2px solid red');
        $("#btnSearchCus").css('cursor','not-allowed');
    }
});

//Validation Order.Item
let RegExItemIdForSearch=/^(I00-)[0-9]{3,4}$/;
$("#txtItemCodeForSearch").keyup(function () {
    if($("#txtItemCodeForSearch").val()==''){
        $("#txtItemCodeForSearch").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemCodeForSearch").val();
    if(RegExItemIdForSearch.test(input)){
        $("#txtItemCodeForSearch").css('border','2px solid green');
    }
    else{
        $("#txtItemCodeForSearch").css('border','2px solid red');
    }
});

//Validation Order.Qty
let RegExQtyForOrder=/^[0-9]{2,10}$/;
$("#txtQtyForAdd").keyup(function () {
    if($("#txtQtyForAdd").val()==''){
        $("#txtQtyForAdd").css('border','1px solid #ced4da');
        $("#btnAddItem").css('cursor','not-allowed');
        return;
    }
    if($("#txtItemQtyResult").val()<$("#txtQtyForAdd").val()){
        $("#txtQtyForAdd").css('border','2px solid red');
        $("#btnAddItem").css('cursor','not-allowed');
    }
    let input =$("#txtQtyForAdd").val();
    if(RegExQtyForOrder.test(input)){
        $("#txtQtyForAdd").css('border','2px solid green');
        $("#btnAddItem").css('cursor','pointer');
    }
    else{
        $("#txtQtyForAdd").css('border','2px solid red');
        $("#btnAddItem").css('cursor','not-allowed');
    }
});

//Validation Order.cash
let RegExCashForOrder=/^[0-9]{2,9}|(.)[0-9]{2}$/;
$("#txtGivenCash").keyup(function () {
    if($("#txtGivenCash").val()==''){
        $("#txtGivenCash").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtGivenCash").val();
    if(RegExCashForOrder.test(input)){
        $("#txtGivenCash").css('border','2px solid green');
    }
    else{
        $("#txtGivenCash").css('border','2px solid red');
    }
});

//Validation Order.Discount
let RegExDiscountTxt=/^[0-9]{2}|(.)[0-9]{1,2}$/;
$("#txtDiscount").keyup(function () {
    if($("#txtDiscount").val()==''){
        $("#txtDiscount").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtDiscount").val();
    if(RegExDiscountTxt.test(input)){
        $("#txtDiscount").css('border','2px solid green');
    }
    else{
        $("#txtDiscount").css('border','2px solid red');
    }
});

