


    function validation() {
        var message = document.forms["RegForm"]["message"];
        var name = document.forms["RegForm"]["name"];
        var email = document.forms["RegForm"]["email"];

        message.style.borderColor = "#66FF99";
        name.style.borderColor = "#66FF99";
        email.style.borderColor = "#66FF99";

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
