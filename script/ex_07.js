let play = document.querySelector("canvas");
let pause = document.querySelectorAll('button');
let playico = play.getContext('2d');
let sound = new Audio("./triangle.ogg");

function triangle() {
    // Triangle icône play blanc
    playico.fillStyle = '#fff';
    playico.moveTo(6, 6);
    playico.lineTo(14, 10);
    playico.lineTo(6, 14);
    playico.fill();
}

triangle();

// play function
play.onclick = function () {
    sound.play();
};

// pause / stop / mute function
pause[0].onclick = function () {
    sound.pause();
};
pause[1].onclick = function () {
    sound.pause();
    sound.currentTime = 0;
};
pause[2].onclick = function () {
    if (sound.volume <= 0) {
        sound.volume = 1;
        console.log(sound.volume);
    } else {
        sound.volume = 0;
        console.log(sound.volume);
    }
};