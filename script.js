function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;

if(name.length<3){
alert("Name must be at least 3 characters");
return false;
}

if(email==""){
alert("Email is required");
return false;
}

alert("Your message has been sent!");
return true;
}
