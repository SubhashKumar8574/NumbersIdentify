
// For Generating the Random Numbers in List.
function start() {
    alert("You are genrating random numbers!!");
    var number = document.querySelectorAll("ul li");
    for (var i = 0, len = number.length; i < len; i++) {
        number[i].innerText = Math.round(1 + (100 - 1) * Math.random());
        number[i].style.backgroundColor = "White";
    }
}

// For check the even numbers in list.
function color_even() {

    var coll = document.querySelectorAll("ul li");
    for (var i = 0, len = coll.length; i < len; i++) {
        if (coll[i].innerText == "") {
            alert(" Sorry, Your box is empty!!");
            break;
        }
        else {
            if (coll[i].innerText % 2 == 0) {
                coll[i].style.backgroundColor = "red";
            }
            else {
                coll[i].style.backgroundColor = "white";
            }
        }
    }
}

// For check the odd numbers in list.
function color_odd() {

    var coll = document.querySelectorAll("ul li");
    for (var i = 0, len = coll.length; i < len; i++) {
        if (coll[i].innerText == "") {
            alert("Sorry, Your box is empty!!");
            break;
        }
        else {
            if (coll[i].innerText % 2 != 0) {
                coll[i].style.backgroundColor = "purple";
            }
            else {
                coll[i].style.backgroundColor = "white";
            }
        }
    }
}

// For check the prime numbers in list.
function color_prime() {
    var coll = document.querySelectorAll("ul li");
    for (var i = 0, len = coll.length; i < len; i++) {
        if (coll[i].innerText == "") {
            alert("Sorry, Your box is empty!!");
            break;
        }
        else {
            if (coll[i].innerText <= 1) {
                coll[i].style.backgroundColor = "white";
            }
            for (var j = 2; j < coll[i].innerText; j++) {
                if (coll[i].innerText % j == 0) {
                    coll[i].style.backgroundColor = "white";
                    break;
                } else {
                    coll[i].style.backgroundColor = "green";
                }

            }
        }
    }

    var box = 0;
    for (var k = 0; k < coll.length; k++) {
        if (coll[k].style.backgroundColor == "green") {
            box++;
        }
    }
    if (coll[0].innerText != "" && box == 0 ) {
        alert("There is no prime number");
    }
    
}

// For Restart the program.
function restart() {
    var number = document.querySelectorAll("ul li");
    if (number[0].innerText == "") {
        alert("Sorry, Your box is already empty!!");
    }
    else {
        confirm("Do You really want to restart?");
        for (var i = 0, len = number.length; i < len; i++) {
            number[i].innerText = "";
            number[i].style.backgroundColor = "White";
        }
    }
}