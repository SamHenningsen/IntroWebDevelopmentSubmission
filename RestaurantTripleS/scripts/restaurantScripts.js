function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++){
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){

            document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-horizontal";
        }
    }
}

function validateForm() {
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var reason = document.forms["contactForm"]["reason"].value;
    var info = document.forms["contactForm"]["info"].value;
    var history = document.forms["contactForm"]["history"].value;
    var bestDays = [];
    var numberOfDays = 0;

    for (var loopCounter = 0; loopCounter < document.forms["contactForm"]["bestDays"].length; loopCounter++){
        if (document.forms["contactForm"]["bestDays"][loopCounter].checked == true){
            bestDays[numberOfDays] = document.forms["contactForm"]["bestDays"][loopCounter].value;
            numberOfDays++;
        }
    }

    if (name == "") {
        alert("Please enter your name.");
        document.forms["contactForm"]["name"].parentElement.className = "form-horizontal has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    if (phone == "" || isNaN(phone)) {
        alert("Please enter your phone number without any punctuation.");
        document.forms["contactForm"]["phone"].parentElement.className = "form-horizontal has-error";
        document.forms["contactForm"]["phone"].focus();
        document.forms["contactForm"]["phone"].value = "";
        return false;
    }
    if (numberOfDays == 0) {
        alert("Please select which days work best for you.")
        document.forms["contactForm"]["bestDays"].parentElement.className = "form-horizontal has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }

    alert("Your form has been submitted! We will get back to you as soon as possible!");
    document.forms["contactForm"].reset();

    /*Other variables are named in case needed later. Reason for inquiry is pre selected, 
    so it is not checke for, even though it is a manditory field. */

    return false;
}