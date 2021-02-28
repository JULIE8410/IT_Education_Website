
/* about.html */

// A message is displayed differently depending on the time
var today = new Date(); //create date object
var j = today.getHours(); //get today's hour
if (j < 12) {   //if hour is less than 12
    document.getElementById('greeting').innerHTML = "Good morning!";
} else if (j < 18) {    //if hour is less than 18
    document.getElementById('greeting').innerHTML = "Good afternoon!";
} else if (j <= 24) {   //if hour is less than 24
    document.getElementById('greeting').innerHTML = "Good evening!";
}

// to make a twinkling bulb
var bulbImg = document.getElementById('bulb');//returns the element that has the id(bulb) value
var x = 1;  // a variable to control on off state
function bulbTurnOnOff() {
    if (x == 1) {   // if x equals 1 (if the bulb is off)
        bulbImg.src = "img/bulb2.gif";
        x = 0;
    }
    else {   // if x equals 0 (if the bulb is on)
        bulbImg.src = "img/bulb1.gif";
        x = 1;
    }
}
bulbTurnOnOff();    //call the function
setInterval(bulbTurnOnOff, 500);    // repeat the function every 0.5s

function largeLetters() {    //make letters larger
    var letters = document.getElementById('clickMe');   //returns the element that has the id(clickMe) value
    letters.style.fontSize = "25px";    //change the font size
}
function smallLetters() {    //make letters smaller
    var letters = document.getElementById('clickMe');
    letters.style.fontSize = "16px";
}