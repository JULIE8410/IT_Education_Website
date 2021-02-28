
/* apply page */

function courseChange() {
    var select = document.getElementById('mycourse');
    var a = select.options[select.selectedIndex].text;
    document.getElementById('demo').innerHTML = a;
}

var z = new Date(); /* make date object */
var y = z.getFullYear();    /* Get the year as a four digit number */
var m = z.getMonth();   /* 	Get the month as a number (0-11) */
if (m == 0) { m = "January"; }    /* if the number is 0 */
else if (m == 1) { m = "February"; }
else if (m == 2) { m = "March"; }
else if (m == 3) { m = "April"; }
else if (m == 4) { m = "May"; }
else if (m == 5) { m = "June"; }
else if (m == 6) { m = "July"; }
else if (m == 7) { m = "August"; }
else if (m == 8) { m = "September"; }
else if (m == 9) { m = "October"; }
else if (m == 10) { m = "November"; }
else if (m == 11) { m = "December"; }
var d = z.getDate(); /* Get the day as a number (1-31) */
var showTIme = document.getElementById('time');
showTIme.innerHTML = "Today : " + m + " " + d + ", " + y;

function validateForm() {    /* check form validation */
    var fName = document.forms["myForm"]["firstName"].value;
    var lName = document.forms["myForm"]["lastName"].value;
    var tel = document.forms["myForm"]["tel"].value;
    if (fName == "" || lName == "" || tel == "") {  /* if there is null value in fName, lName, and tel */
        alert("Name and Phone number must be filled out");  /* alert message */
        return false;
    }
    if (fName != "" || lName != "" || tel != "") {  /* if there is not null value in fName, lName, and tel */
        alert("Your application has been successfully completed. Thank you! ");
    }
}