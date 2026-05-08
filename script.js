function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if(name.length < 3){
alert("Please enter a valid name");
return false;
}

if(email == ""){
alert("Please enter your email");
return false;
}

if(message.length < 10){
alert("Message is too short");
return false;
}

alert("Message sent successfully");
return true;

}
