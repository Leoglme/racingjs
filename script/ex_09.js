let container = document.querySelector("footer > div");
let canvas = document.querySelector("footer > div > canvas");
let containerResult = document.querySelectorAll("footer > div")[1];

let active = false;
let newX;
let newY;
let defaultX;
let defaultY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", dragActive, false);
container.style.overflow = 'hidden'; // => "mur du container"

function dragStart(e) {
    defaultX = e.clientX - xOffset;
    defaultY = e.clientY - yOffset;

    if (e.target === canvas) {
        active = true;
    }
}

function dragEnd(e) {
    defaultX = newX;
    defaultY = newY;
    active = false;
}

function dragActive(e) {
    if (active === true) {
        newX = e.clientX - defaultX;
        newY = e.clientY - defaultY;
        xOffset = newX;
        yOffset = newY;

        newPosition(newX, newY, canvas);
    }
}

function newPosition(x, y, cible) {
    cible.style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
    containerResult.innerHTML = "Nouvelles coordonnées => {x:" + x + ", y:" + y + "}";
}