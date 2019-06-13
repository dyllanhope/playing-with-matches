var templateSource = document.querySelector(".numListTemplate").innerHTML;
var messageSource = document.querySelector(".displayMessage").innerHTML;
var template = Handlebars.compile(templateSource);
var messageTemp = Handlebars.compile(messageSource);
var numDataTemp = document.querySelector(".numData");
var messageData = document.querySelector(".messageData");
var randomiseBtn = document.querySelector(".ranBtn");

var message = document.querySelector(".displayMessage");

var numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var numData = [];

var rowData = [];

randomiseBtn.addEventListener('click', function () {
    document.location.reload();
});

window.onload = function () {
    buildNumArray();
    buildData();
    buildNums();
    buildRowData();

};

function getRandomInt() {
    var min = Math.ceil(1);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

function buildNumArray() {
    var num;
    var found = false;
    var numsMatched = [0, 0];
    for (var i = 0; i < numArray.length; i++) {
        for (var z = 0; z < numArray[i].length; z++) {
            numArray[i][z] = getRandomInt();
        }
        for (var x = 0; x < numArray[i].length; x++) {
            var temp = numArray[i][x];
            for (var y = 0; y < numArray[i].length; y++) {
                if (x !== y) {
                    if (temp === numArray[i][y]) {
                        found = true;
                        num = temp;
                    }
                }
            }
        }
        if (found === true) {
            rowData.push({ num: num, row: i + 1 });
            found = false;
        }
    };
    return numsMatched;
};

function buildNums() {
    var numOptions = { numList: numData };
    var numHTML = template(numOptions);
    numDataTemp.innerHTML = numHTML;
}
function buildRowData() {
    var rowOptions = { resultList: rowData };
    var rowHTML = messageTemp(rowOptions);
    messageData.innerHTML = rowHTML;
}

function buildData() {
    for (var x = 0; x < numArray.length; x++) {
        for (var y = 0; y < numArray[x].length; y++) {
            numData.push({ num: numArray[x][y] });
        }
    }
}