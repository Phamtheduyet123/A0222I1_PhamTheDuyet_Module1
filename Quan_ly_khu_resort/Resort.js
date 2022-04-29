let listCustomer = [];
class Resort {
    constructor(serviceName, usableArea, rentalCosts, maximumPeople, rentalType) {
        this.serviceName = serviceName;
        this.usableArea = usableArea;
        this.rentalCosts = rentalCosts;
        this.maximumPeople = maximumPeople;
        this.rentalType = rentalType;
    }
}

class Villa extends Resort {
    constructor(serviceName, usableArea, rentalCosts, maximumPeople, rentalType, roomStandard, descriptionOfOtherAmenities, swimmingPoolArea, numberOfFloors) {
        super(serviceName, usableArea, rentalCosts, maximumPeople, rentalType);
        this.roomStandard = roomStandard;
        this.descriptionOfOtherAmenities = descriptionOfOtherAmenities;
        this.swimmingPoolArea = swimmingPoolArea;
        this.numberOfFloors = numberOfFloors;
    }
}

class House extends Villa{
    constructor(serviceName, usableArea, rentalCosts, maximumPeople, rentalType, roomStandard, descriptionOfOtherAmenities,numberOfFloors) {
        super(serviceName, usableArea, rentalCosts, maximumPeople, rentalType, roomStandard, descriptionOfOtherAmenities, numberOfFloors);
    }
}

class Room extends Resort{
    constructor(serviceName, usableArea, rentalCosts, maximumPeople, rentalType,freeServiceIncluded) {
        super(serviceName, usableArea, rentalCosts, maximumPeople, rentalType);
        this.freeServiceIncluded= freeServiceIncluded;
    }
}
class AccompaniedService extends Resort{
    constructor(serviceName, usableArea, rentalCosts, maximumPeople, rentalType,accompaniedService,price,massage, karaoke,drinkWater,sightseeingCarRental) {
        super(serviceName, usableArea, rentalCosts, maximumPeople, rentalType);
        this.massage = massage;
        this.karaoke = karaoke;
        this.drinkWater = drinkWater;
        this.sightseeingCarRental = sightseeingCarRental;
    }
}
class EmployeeResort {
    constructor(name,dateOfBirth,idNumber,phoneNumber,email,level, position,wage) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.idNumber = idNumber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.level = level;
        this.position = position;
        this.wage = wage;
    }
}
class  Customer {
    constructor(name,dateOfBirth,gender,idNUmber,phoneNumber,email,clientType,address) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender =gender;
        this.idNumber = idNUmber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.clientType = clientType;
        this.address = address;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(DateOfBirth){
        this.dateOfBirth = DateOfBirth;
    }
    getGender(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }
    getIdNumber(){
        return this.idNumber;
    }
    setIdNumber(idNumber){
        this.idNumber = idNumber;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getClientType(){
        return this.clientType;
    }
    setClientType(clientType){
        this.clientType = clientType;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address = address;
    }

}
function getData() {
    let name = document.getElementById("name").value;
    let dateOfBirth = document.getElementById("number").value;
    let gender = document.getElementById("gender").value;
    let idNumber = document.getElementById("idNumber").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let typeCustomme = document.getElementById("typeCustommer").value;
    let sale = document.getElementById("Sale").value;
    let quantity = document.getElementById("Quantity").value;
    let rentDays = document.getElementById("RentDays").value;
    let typeOfService = document.getElementById("Type Of Service").value;
    let roomRentalType = document.getElementById("Room Rental Type").value;
    //Tạo đối tượng
    let customer = new Customer(name, dateOfBirth, gender, idNumber, phoneNumber, email, typeCustomme, address);
    //Đẩy đối tượng vào mảng
    listCustomer.push(customer);
    //Hàm in dữ liệu của Customer
    setData(listCustomer);
    //Hàm tính tổng
    Total(typeOfService,sale,rentDays);
}
function Total(typeOfService,sale,rentDays) {
    if(typeOfService =="Villa"){
        let total = 500*rentDays*(1-(sale/100));
        alert(total+"$");
    }
    if(typeOfService =="House"){
        let total = 300*rentDays*(1-(sale/100));
        alert(total+"$");
    }
    if(typeOfService =="Room"){
        let total = 100*rentDays*(1-(sale/100));
        alert(total+"$");
    }
}
function setData(listCustomer) {
    let stringTable = '<table>';
    for (let i = 0; i <listCustomer.length ; i++) {
        stringTable+='<tr>';
        for (let j = 0; j <1 ; j++) {
        stringTable+='<td>'+listCustomer[i].getName()+ '</td>'+
            '<td>'+listCustomer[i].getDateOfBirth()+'</td>'+
            '<td>'+listCustomer[i].getGender()+'</td>'+
            '<td>'+listCustomer[i].getIdNumber()+'</td>'+
            '<td>'+listCustomer[i].getPhoneNumber()+'</td>'+
            '<td>'+listCustomer[i].getEmail()+'</td>'+
            '<td>'+listCustomer[i].getAddress()+'</td>'+
            '<td>'+listCustomer[i].getClientType()+'</td>';
        }
        stringTable+='</tr>';
    }
    stringTable+='</table>';
    document.getElementById("abc").innerHTML = stringTable;
}