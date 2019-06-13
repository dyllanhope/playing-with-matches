var numberDisplay1 = document.querySelector(".numDisplay1");
var numberDisplay2 = document.querySelector(".numDisplay2");
var numberDisplay3 = document.querySelector(".numDisplay3");
var message = document.querySelector(".displayMessage");

window.onload = function () {
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;

    num1 = getRandomInt();
    numberDisplay1.innerHTML = num1;
    num2 = getRandomInt();
    numberDisplay2.innerHTML = num2;
    num3 = getRandomInt();
    numberDisplay3.innerHTML = num3;
};

function getRandomInt() {
    var min = Math.ceil(1);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

function highlightMatching(first, second, third) {
    if (first === second && first === third) {
        message.innerHTML = "All three of the numbers matched " + first + ", " + second + " and " + third;
    }else if(first === second){
        message.innerHTML = "2 numbers matched " +first + " and " + second;
    }
};