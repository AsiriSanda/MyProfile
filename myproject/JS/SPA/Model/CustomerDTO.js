function CustomerDTO(id, name, address, telephone) {
    var __custId=id;
    var __custName=name;
    var __custAddress=address;
    var __custTelephone=telephone;
    
    this.getCustomerID=function () {
        return __custId;
    }
    this.getCustomerName=function () {
        return __custName;
    }
    this.getCustomerAddress=function () {
        return __custAddress;
    }
    this.getCustomerTelephone=function (){
        return __custTelephone;
    }
    this.setCustomerID=function (id) {
         __custId=id;
    }
    this.setCustomerName=function (name) {
         __custName=name;
    }
    this.setCustomerAddress=function (address) {
         __custAddress=address;
    }
    this.setCustomerTelephone=function (telephone){
         __custTelephone=telephone;
    }
}