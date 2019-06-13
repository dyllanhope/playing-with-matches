var templateSource = document.querySelector(".numListTemplate").innerHTML;
var template = Handlebars.compile(templateSource);
var numData = document.querySelector(".numData");
var randomiseBtn = document.querySelector(".ranBtn");

var message = document.querySelector(".displayMessage");
var displayList = [
    { item: 0, num: 0, style: 'numberStyle' },
    { item: 1, num: 0, style: 'numberStyle' },
    { item: 2, num: 0, style: 'numberStyle' }
];

randomiseBtn.addEventListener('click',function(){
    resetStyles();
    inputNums();
    let numsfound = highlightMatching();
    if (numsfound[0] !== 0 && numsfound[1] !== 0){
        message.innerHTML = "We have " + numsfound[1] + " number " + numsfound[0]+ 's';
    }else{
        message.innerHTML = '';
    }
    buildNums();
});

window.onload = function () {
    resetStyles();
    inputNums();
    let numsfound = highlightMatching();
    if (numsfound[0] !== 0 && numsfound[1] !== 0){
        message.innerHTML = "We have " + numsfound[1] + " number " + numsfound[0];
    }
    buildNums();

};

function getRandomInt() {
    var min = Math.ceil(1);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

function highlightMatching(first, second, third) {
    var numsMatched = [0,0];
    for (var i = 0; i < displayList.length; i++) {
        var temp = displayList[i].num;
        for (var z = 0; z < displayList.length; z++) {
            if(i!==z){
                if (temp === displayList[z].num){
                    displayList[z].style = 'highlight';
                    displayList[i].style = 'highlight';
                    numsMatched[1]++;
                    numsMatched[0] = temp;
                }
            }
        }
    };
    return numsMatched;
};

function buildNums() {
    var numOptions = { numList: displayList };
    var numHTML = template(numOptions);
    numData.innerHTML = numHTML;
}
function inputNums() {
    for (var x = 0; x < displayList.length; x++) {
        if (x === displayList[x].item) {
            displayList[x].num = getRandomInt();
        }
    }
}
function resetStyles(){
    for(var x=0;x<displayList.length;x++){
        displayList[x].style="numberStyle";
    }
}