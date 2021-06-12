let page = document.querySelector("body");
const getstyle = getComputedStyle(page);
let fontSize = parseInt(getstyle.fontSize, 10); //return -> 16px
let btn = document.querySelectorAll("button");

// PARTIE BTN + AND -
// btn[0] === "+" && btn[1] === "-"
btn[0].onclick = function () {
    fontSize += 1;
    convert();
};
btn[1].onclick = function () {
    fontSize -= 1;
    convert();
};

function convert() {
    fontSize = fontSize.toString();
    page.style.fontSize = fontSize + "px";
    fontSize = parseInt(fontSize, 10);
}

// PARTIE CHANGE BG COLOR
let test = document.querySelector("select");
test.onchange = function () {
    page.style.background = test.value;
};
