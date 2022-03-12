function ItemDTO(code, name, qty, price) {
    var __code=code;
    var __name=name;
    var __qty=qty;
    var __price=price;

    this.getItemCode=function () {
        return __code;
    }
    this.getItemName=function () {
        return __name;
    }
    this.getItemQty=function () {
        return __qty;
    }
    this.getItemPrice=function (){
        return __price;
    }
    this.setItemCode=function (id) {
        __code=id;
    }
    this.setItemName=function (name) {
        __name=name;
    }
    this.setItemQty=function (address) {
        __qty=address;
    }
    this.setItemPrice=function (telephone){
        __price=telephone;
    }
}