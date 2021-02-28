
/* main page */
var imgArray = new Array(); //make the array object
imgArray[0] = "img/main1.jpg";  //save main1.jpg in the first(index=0)
imgArray[1] = "img/main2.jpg";
imgArray[2] = "img/main3.jpg";
imgArray[3] = "img/main4.jpg";
imgArray[4] = "img/main5.jpg";
imgArray[5] = "img/main6.jpg";
var imgNum = 0; // a variable to control index number

function showImage() {

    var objImg = document.getElementById('mainImg'); //return the element that has the id(mainImg) value
    objImg.src = imgArray[imgNum]; //change image src  
    imgNum++;   //increase the value by 1
    if (imgNum == 5) imgNum = 0;    //if ingNum equals 5, then make the value 0
    setTimeout(showImage, 2000);    //after 2 seconds call the function

}

function showMessage() {
    var i = document.getElementById('welcome');//return the element that has the id(welcome) value
    var arr = ["W", "E", "L", "C", "O", "M", "E", "!"]; //make an array having one charactor

    setTimeout(function () {  //each letter appears on the screen every second
        i.innerHTML = arr[0];   // display letter W
        setTimeout(function () {
            i.innerHTML = arr[0] + " " + arr[1];
            setTimeout(function () {
                i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2];
                setTimeout(function () {
                    i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3];
                    setTimeout(function () {
                        i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " + arr[4];
                        setTimeout(function () {
                            i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " +
                                arr[4] + " " + arr[5];
                            setTimeout(function () {
                                i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " +
                                    arr[4] + " " + arr[5] + " " + arr[6];
                                setTimeout(function () {
                                    i.innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + " " + arr[3] + " " +
                                        arr[4] + " " + arr[5] + " " + arr[6] + " " + arr[7];
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
showMessage();  //call the function