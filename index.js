let IstagramIconElement = document.getElementById("InstagramIconContainer")
let WhatsappIconElement =document.getElementById("WhatsappIconContainer")
let PhoneIconElement =document.getElementById("PhoneIconContainer")
function whatsapp(){
    window.location.href = "https://api.whatsapp.com/send?phone=6380248073&text=Hi";
}
WhatsappIconElement.onclick=whatsapp;
function phone(){
    window.location.href = "tel:6380248073";
}
PhoneIconElement.onclick=phone;
function instagram(){
    window.location.href = "https://www.instagram.com/";
}
IstagramIconElement.onclick=instagram;
