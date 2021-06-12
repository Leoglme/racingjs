let container = document.querySelector("footer > div");
container.addEventListener("pangolin" , randomColor);

function randomColor() {
    let r = Math.floor(256*Math.random());
    let g = Math.floor(256*Math.random());
    let b = Math.floor(256*Math.random());
    container.style.background = "rgb(" + r + "," + g + "," + b + ")";
}