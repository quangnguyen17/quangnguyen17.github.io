
var time = 0;
var timeTable = [];

var isWaldo = true;
var characters = {
    waldo: 'images/waldo.jpg',
    potato: 'images/potato.jpg'
}

function getStats(timeArr) {
    var min = timeArr[0], max = timeArr[0], sum = timeArr[0];
    var count = 1;

    for (var index in timeArr) {
        if (timeArr[index] > max) {
            max = timeArr[index];
        }

        if (timeArr[index] < min) {
            min = timeArr[index];
        }

        sum += timeArr[index];
        count++;
    }

    return { worst: max, average: Math.floor(sum / count), best: min };
}

function displayTime(timeStamp) {
    var hours = Math.floor(timeStamp / 60 / 60);
    var minutes = Math.floor(timeStamp / 60) - (hours * 60);
    var seconds = timeStamp % 60;
    return `${hours > 0 ? `${hours}h ` : ``}${minutes > 0 ? `${minutes}m ` : ``}${seconds}s`;
}

function startTimer() {
    setInterval(() => {
        time++;
        $(`.timer`).text(displayTime(time));
    }, 1000);
}

function waldoClicked() {
    isWaldo = !isWaldo;

    $('#heading').text(`Find ${isWaldo ? 'Waldo' : 'Potato'}`);
    $('#wald-text').text(`"${isWaldo ? 'Waldo' : 'Potato'}: ${isWaldo ? 'find' : 'eat'} me! :)"`);
    $('#waldo').attr('src', isWaldo ? characters.waldo : characters.potato);

    draw();
    timeTable.push(time);
    time = 0;

    $('#stats').append(`<li class="btn btn-dark rounded-0 px-4 py-2 my-1">#${timeTable.length}  -  ${displayTime(timeTable[timeTable.length - 1])}</li><br>`);

    var scoreRatings = getStats(timeTable);
    for (var key in scoreRatings) {
        var firstCapKey = key.charAt(0).toUpperCase() + key.slice(1);
        var value = `${firstCapKey}: ${displayTime(scoreRatings[key])}`
        $(`#${key}`).html(value);
    }
}

function draw() {
    var x = Math.floor(Math.random() * 20) + 0;
    var y = Math.floor(Math.random() * 20) + 0;
    var code = ``;

    for (var row = 0; row < 20; row++) {
        code += `<div class="row game-content m-0 p-0" style="height: 5vh">`;

        for (var col = 0; col < 20; col++) {
            var waldo = (col == x && row == y) ? "waldo" : "blank";
            code += `<div id="character-box" class="col bg-${waldo} show-waldo m-0 p-0" style="background-image: url(${isWaldo ? characters.waldo : characters.potato});"></div>`;
        }

        code += `</div>`;
    }

    $('.game').html(code);
    $(".bg-waldo").on("click", waldoClicked);
    handleHovering();
}

function handleHovering() {
    $('.show-waldo').hover(function () {
        $(this).animate({
            opacity: "1",
            height: "+=10",
        }, 250)
    }, function () {
        $(this).animate({
            opacity: "0",
            height: "-=10",
        }, 250);
    });
}

$(document).ready(() => {
    draw();
    startTimer();
});