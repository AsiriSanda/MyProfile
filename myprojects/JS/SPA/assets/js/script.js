// Hide Item & Order
document.getElementById("ManageItemPage").style.setProperty("display","none","important");
document.getElementById("PlaceOrderPage").style.setProperty("display","none","important");

// ClickEvents
document.getElementById("HomeBtn").addEventListener("click",function (){
    document.getElementById("ManageCustomePage").style.setProperty("display","block","important");
    document.getElementById("ManageItemPage").style.setProperty("display","none","important");
    document.getElementById("PlaceOrderPage").style.setProperty("display","none","important");
});

document.getElementById("ItemsBtn").addEventListener("click",function (){
    document.getElementById("ManageItemPage").style.setProperty("display","block","important");
    document.getElementById("ManageCustomePage").style.setProperty("display","none","important");
    document.getElementById("PlaceOrderPage").style.setProperty("display","none","important");
});

document.getElementById("OrdersBtn").addEventListener("click",function (){
    document.getElementById("PlaceOrderPage").style.setProperty("display","block","important");
    document.getElementById("ManageItemPage").style.setProperty("display","none","important");
    document.getElementById("ManageCustomePage").style.setProperty("display","none","important");
});