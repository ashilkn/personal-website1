


function validation() {
    var message = document.forms["RegForm"]["message"];
    var name = document.forms["RegForm"]["name"];
    var email = document.forms["RegForm"]["email"];
    var contactNumber = document.forms["RegForm"]["contactNumber"];
    var spaceCounter = 0;
    var flag = 0;
    var flag1 = 0;
    var emailErr = document.getElementById('email-err');
    var nameErr = document.getElementById('name-err');
    var messageErr = document.getElementById('message-err');

    emailErr.className = "";
    nameErr.className = "";
    messageErr.className = "";

    message.style.border = "1px #66FF99 solid";
    name.style.border = "1px #66FF99 solid";
    email.style.border = "1px #66FF99 solid";
    contactNumber.style.border = "1px #66FF99 solid";

    if(message.value == "" && name.value == "" && email.value == "" && contactNumber.value == "") {
        messageNotEntered();
        nameNotEntered();
        emailNotEntered();
        numberNotEntered();
        return false;
    }

    if(message.value == "" && name.value == "" && email.value == ""){
        messageNotEntered();
        nameNotEntered();
        emailNotEntered();
        return false;
    }

    if(message.value == "" && name.value == "" && contactNumber.value == "") {
        messageNotEntered();
        nameNotEntered();
        numberNotEntered();
        return false;
    }
    if(message.value == "" && email.value == "" && contactNumber.value == "") {
        messageNotEntered();
        emailNotEntered();
        numberNotEntered();
        return false;
    }
    if(name.value == "" && email.value == "" && contactNumber.value == "") {
        nameNotEntered();
        emailNotEntered();
        numberNotEntered();
        return false;
    }

    if(message.value == "" && name.value == "") {
        messageNotEntered();
        nameNotEntered();
        return false;
    }
        
    if(email.value == "" && name.value == "") {
        emailNotEntered();
        nameNotEntered();
        return false;
    }
        
    if(email.value == "" && message.value == "") {
        emailNotEntered();
        messageNotEntered();
        return false;
    }

    if(contactNumber.value == "" && message.value == "") {
        numberNotEntered();
        messageNotEntered();
        return false;
    }

    if(contactNumber.value == "" && name.value == "") {
        numberNotEntered();
        nameNotEntered();
        return false;
    }

    if(contactNumber.value == "" && email.value == "") {
        emailNotEntered();
        messageNotEntered();
        return false;
    }

    if (message.value == "") {
        messageNotEntered();
        return false;
    }
  
    if (name.value == "") {
        nameNotEntered();
        return false;
    }
  
    if (email.value == "") {
        emailNotEntered();
        return false;
    }

    if(contactNumber.value == ""){
        numberNotEntered();
        return false;
    }

    if(1){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value)))
        {
            var forBorder = document.getElementById("email");
            forBorder.style.borderColor = "red";
            forBorder.placeholder = "INVALID EMAIL";
            emailErr.className = "appear";
            flag1 = 1;
        }

        if(/[0-9]/.test(name.value)) {
            nameErr.className = "appear";
            var forBorder = document.getElementById("name");
            forBorder.style.borderColor = "red";
            flag1 = 1;
        }

        if(message.value[0] == " ")
        {
            var forBorder = document.getElementById("message");
            forBorder.style.borderColor = "red";
            messageErr.className = "appear";
            flag1 = 1;
        }
        
        if(flag1 == 1){
            return false;
        }
    }

    for(var i = 0 ; i < String(message.value).length; i++) {
        if(message.value[i] == " ") {
            spaceCounter++;
        }
    }

    if(spaceCounter == String(message.value).length) {
        var forBorder = document.getElementById("message");
        forBorder.style.borderColor = "red";
        forBorder.placeholder = "MESSAGE NOT ENTERED!";
        return false;
    }
    else {
        message.style.border = "1px #66FF99 solid";
    }

    message.style.border = "1px #66FF99 solid";
    name.style.border = "1px #66FF99 solid";
    email.style.border = "1px #66FF99 solid";
    contactNumber.style.border = "1px #66FF99 solid";

    setTimeout(function(){
        alert("From submitted!");
    }, 500)
    return true;
}

function messageNotEntered() {
    var forBorder = document.getElementById("message");
    forBorder.style.borderColor = "red";
    forBorder.placeholder = "MESSAGE NOT ENTERED!";
}

function nameNotEntered() {
    var forBorder = document.getElementById("name");
    forBorder.style.borderColor = "red";
    forBorder.placeholder = "NAME NOT ENTERED!";
}
    
function emailNotEntered() {
    var forBorder = document.getElementById("email");
    forBorder.style.borderColor = "red";
    forBorder.placeholder = "EMAIL NOT ENTERED!";
}

function numberNotEntered() {
    var forBorder = document.getElementById("contactNumber");
    forBorder.style.borderColor = "red";
    forBorder.placeholder = "CONTACT NOT ENTERED!";
}
