


function validation() {
    var message = document.forms["RegForm"]["message"];
    var name = document.forms["RegForm"]["name"];
    var email = document.forms["RegForm"]["email"];
    var spaceCounter = 0;
    var flag = 0;

    message.style.border = "1px #66FF99 solid";
    name.style.border = "1px #66FF99 solid";
    email.style.border = "1px #66FF99 solid";

    if(message.value == "" && name.value == "" && email.value == "") {
        messageNotEntered();
        nameNotEntered();
        emailNotEntered();
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

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(RegForm.email.value))
    {}
    else {
        var forBorder = document.getElementById("email");
        forBorder.style.borderColor = "red";
        forBorder.placeholder = "INVALID EMAIL";
        return false;
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

    for(var i = 0; i < String(name.value).length; i++) {
        if(name.value[i] == 0 || name.value[i] == 1 || name.value[i] == 2 || name.value[i] == 3 || name.value[i] == 4 || name.value[i] == 5 || name.value[i] == 6 || name.value[i] == 7 || name.value[i] == 8 || name.value[i] == 9 ) {
            flag = 1;
            break;
        }
    }

    if( flag == 1 ) {
        var forBorder = document.getElementById("name");
        forBorder.style.borderColor = "red";
        return false;
    }
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
