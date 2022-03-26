var x = document.getElementById("myAudio");
var faded = document.getElementById("faded");
var safari = document.getElementById("safari");
var blackpink = document.getElementById("blackpink");
var hindi = document.getElementById("hindi");
var cheap = document.getElementById("cheap");



function playSound() {
    x.play();
    faded.pause();
    cheap.pause();
    safari.pause();
    blackpink.pause();
    hindi.pause();
}

function previousSound() {
    x.pause();
}

function nextSound() {
    x.pause();

}

function playSound2() {
    faded.play();
    x.pause();
    cheap.pause();
    safari.pause();
    blackpink.pause();
    hindi.pause();
}

function playSound3() {
    blackpink.play();
    x.pause();
    faded.pause();
    safari.pause();
    cheap.pause();
    hindi.pause();
}

function playSound4() {
    safari.play();
    x.pause();
    faded.pause();
    cheap.pause();
    blackpink.pause();
    hindi.pause();
}

function playSound5() {
    hindi.play();
    x.pause();
    faded.pause();
    safari.pause();
    blackpink.pause();
    cheap.pause();
}

function playSound6() {
    cheap.play();
    x.pause();
    faded.pause();
    safari.pause();
    blackpink.pause();
    hindi.pause();
}

function dblSound() {
    x.pause();
}

function dblSound2() {
    faded.pause();
}

function dblSound3() {
    blackpink.pause();
}

function dblSound4() {
    safari.pause();
}

function dblSound5() {
    hindi.pause();
}

function dblSound6() {
    cheap.pause();
}



