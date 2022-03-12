clearItemValidation();
$("#itemSaveOrUpdate").click(function () {

    let itemID = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemQty= $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();
    let nullVal='';
    if(itemID==nullVal||itemName==nullVal||itemQty==nullVal||itemPrice==nullVal){
        alert("warning-Please Input Data Correctly To Continue..");
        return;
    }
    let index=isItemExists(itemID);
    if(index!=-1){
        alert("ItemDTO Updated");
        item[index].setItemName(itemName);
        item[index].setItemQty(itemQty);
        item[index].setItemPrice(itemPrice);
        loadAllItem()
        bindEventItemTable();
        return;
    }


    let i1=new ItemDTO(itemID,itemName,itemQty,itemPrice);
    item.push(i1);
    loadAllItem();
    bindEventItemTable();
    clearFields();
});



$("#btnItemSearch").click(function () {
    let property=$("#srcItemProperty").val();
    let index=isItemExists(property);
    if(index!=-1){
        alert("ItemDTO Found");
        $("#txtItemCode").val(item[index].getItemCode());
        $("#txtItemName").val(item[index].getItemName());
        $("#txtItemQty").val(item[index].getItemQty());
        $("#txtItemPrice").val(item[index].getItemPrice());
        return;
    }
    alert("ItemDTO Not Found");
});

$("#itemDelete").click(function () {
    let itemID=$("#txtItemCode").val();
    let index=isItemExists(itemID);
    if(index!=-1){
        item.splice(index,1);
        loadAllItem();
        alert("ItemDTO "+itemID+" Deleted");
        clearFields();
        return;
    }
    alert("No ItemDTO Found");
});

function clearFields() {
    $("#txtItemCode").val('');
    $("#txtItemName").val('');
    $("#txtItemQty").val('');
    $("#txtItemPrice").val('');
    $("#srcItemProperty").val('');
}
function isItemExists(id){
    let x=-1;
    for(let i=0;i<item.length;i++){
        if(item[i].getItemCode()==id) {
            x = i;
        }
    }
    return x;
}

function loadAllItem() {
    $("#itemTable>tr").remove();
    for(let i=0;i<item.length;i++){
        let itemId=item[i].getItemCode();
        let itemName=item[i].getItemName();
        let itemQty=item[i].getItemQty();
        let itemPrice=item[i].getItemPrice();
        let row = `<tr><td>${itemId}</td><td>${itemName}</td><td>${itemQty}</td><td>${itemPrice}</td></tr>`;
        $("#itemTable").append(row);
    }
}
function bindEventItemTable() {
    $("#itemTable>tr").off("click");
    $("#itemTable>tr").click(function(){
        let Row=$(this);
        let itemId = $(Row.children().get(0)).text();
        let itemName = $(Row.children().get(1)).text();
        let itemQty = $(Row.children().get(2)).text();
        let itemPrice = $(Row.children().get(3)).text();
        //Assignment
        $("#txtItemCode").val(itemId);
        $("#txtItemName").val(itemName);
        $("#txtItemQty").val(itemQty);
        $("#txtItemPrice").val(itemPrice);
    });
}

function clearItemValidation() {
    $("#validationTextItemId").css('display','none');
    $("#validationTextItemName").css('display','none');
    $("#validationTextItemQty").css('display','none');
    $("#validationTextItemPrice").css('display','none');
    $("#validationTextSrcBar").css('display','none');
}

let RegExItemID=/^(I-)[0-9]{1,4}$/;
$("#txtItemCode").keyup(function () {
    if($("#txtItemCode").val()==''){
        $("#validationTextItemId").css('display','none');
        $("#txtItemCode").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemCode").val();
    if(RegExItemID.test(input)){
        $("#txtItemCode").css('border','2px solid green');
        $("#validationTextItemId").css('display','none');
    }
    else{
        $("#txtItemCode").css('border','2px solid red');
        $("#validationTextItemId").css('display','block');
    }
});

//ItemDTO Validation
let RegExItemName=/^[A-z]{4,100}$/;
$("#txtItemName").keyup(function () {
    if($("#txtItemName").val()==''){
        $("#validationTextItemName").css('display','none');
        $("#txtItemName").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemName").val();
    if(RegExItemName.test(input)){
        $("#txtItemName").css('border','2px solid green');
        $("#validationTextItemName").css('display','none');
    }
    else{
        $("#txtItemName").css('border','2px solid red');
        $("#validationTextItemName").css('display','block');
    }
});

//ItemDTO.Qty Validation-
let RegExItemQty=/^[0-9]{1,5}$/;
$("#txtItemQty").keyup(function () {
    if($("#txtItemQty").val()==''){
        $("#validationTextItemQty").css('display','none');
        $("#txtItemQty").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemQty").val();
    if(RegExItemQty.test(input)){
        $("#txtItemQty").css('border','2px solid green');
        $("#validationTextItemQty").css('display','none');
    }
    else{
        $("#txtItemQty").css('border','2px solid red');
        $("#validationTextItemQty").css('display','block');
    }
});

//ItemDTO.Price Validation-
let RegExItemPrice=/^[0-9]{1,5}/;
$("#txtItemPrice").keyup(function () {
    if($("#txtItemPrice").val()==''){
        $("#validationTextItemPrice").css('display','none');
        $("#txtItemPrice").css('border','1px solid #ced4da');
        return;
    }
    let input =$("#txtItemPrice").val();
    if(RegExItemPrice.test(input)){
        $("#txtItemPrice").css('border','2px solid green');
        $("#validationTextItemPrice").css('display','none');
    }
    else{
        $("#txtItemPrice").css('border','2px solid red');
        $("#validationTextItemPrice").css('display','block');
    }
});
