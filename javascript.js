
// For testing the result according to the Serial Numbers.
var result = document.getElementById("Result");

// For Generating the Random Numbers in List.
function start() {
    alert("You are genrating random numbers!!");
    var number = document.querySelectorAll("ul li");
    for (var i = 0, len = number.length; i < len; i++) {
        number[i].innerText = Math.round(1 + (100 - 1) * Math.random());
        number[i].style.backgroundColor = "White";
    }
    result.innerText = "RESULT :";
}

// For check the even numbers in list.
function color_even() {
    count = 0;
    var coll = document.querySelectorAll("ul li");
    for (var i = 0, len = coll.length; i < len; i++) {
        if (coll[i].innerText == "") {
            alert(" Sorry, Your box is empty!!");
            result.innerText = "RESULT :";
            break;
        }
        else {
            if (coll[i].innerText % 2 == 0) {
                coll[i].style.backgroundColor = "red";
                count++;
            }
            else {
                coll[i].style.backgroundColor = "white";
            }
        }
    }
    result.innerText = ("Total Even Number = " + count);
}

// For check the odd numbers in list.
function color_odd() {
    count = 0;
    var coll = document.querySelectorAll("ul li");
    for (var i = 0, len = coll.length; i < len; i++) {
        if (coll[i].innerText == "") {
            alert("Sorry, Your box is empty!!");
            result.innerText = "RESULT :";
            break;
        }
        else {
            if (coll[i].innerText % 2 != 0) {
                coll[i].style.backgroundColor = "purple";
                count++;
            }
            else {
                coll[i].style.backgroundColor = "white";
            }
        }
    }
    result.innerText = ("Total Odd Number = " + count);
}

// For check the prime numbers in list.
function color_prime() {
    var coll = document.querySelectorAll("ul li");
    for (var i = 0; i < coll.length; i++) {
        if (coll[i].innerText == "") {
            alert("Sorry, Your box is empty!!");
            result.innerText = "RESULT :";
            break;
        }
        else {
            if (coll[i].innerText <= 1) {
                coll[i].style.backgroundColor = "white";
            }
            else if (coll[i].innerText == 2) {
                coll[i].style.backgroundColor = "green";
            }
            else {
                for (var j = 2; j < coll[i].innerText; j++) {
                    if (coll[i].innerText % j == 0) {
                        coll[i].style.backgroundColor = "white";
                        break;
                    }
                    else {
                        coll[i].style.backgroundColor = "green";
                    }
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
    if (coll[0].innerText != "" && box == 0) {
        alert("There is no prime number");
    }
    result.innerText = ("Total Prime Number = " + box);
}

// For Restart the program.
function restart() {
    var number = document.querySelectorAll("ul li");
    if (number[0].innerText == "") {
        alert("Sorry, Your box is already empty!!");
    }
    else {
        if (confirm("Do You really want to restart?") == true) {
            for (var i = 0, len = number.length; i < len; i++) {
                number[i].innerText = "";
                number[i].style.backgroundColor = "White";
            }
        }

    }
    result.innerText = "RESULT :";
}

// for Generating Serial Numbers.
function serial() {

    let user = prompt("Give the number starting from", "Input Numbers only");
    var number = document.querySelectorAll("ul li");

    if (user = +user) {                     // check for whether number input is number or string.
        for (var i = 0, len = number.length; i < len; i++) {
            input = i + user;
            number[i].innerText = parseInt(user) + i;
            number[i].style.backgroundColor = "White";
        }
    }
    else {
        alert("Wrong Input!!, Please Input the only numbers.");
        for (var i = 0, len = number.length; i < len; i++) {
            number[i].innerText = "";
            number[i].style.backgroundColor = "White";
        }
    }
    result.innerText = "RESULT :";
}
