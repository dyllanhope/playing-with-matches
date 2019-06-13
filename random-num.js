var numberDisplay1 = document.querySelector(".numDisplay1");
var numberDisplay2 = document.querySelector(".numDisplay2");
var numberDisplay3 = document.querySelector(".numDisplay3");

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

function highlightMatching(first,second,third){
    
};