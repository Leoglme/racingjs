let container = document.querySelector("footer > div");
let img = new Image();
img.src = "script/pangolin.jpg";

function getBase64Image(img) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/jpeg");
}

img.addEventListener("load", function () {
    localStorage.setItem("pangolin", getBase64Image(img));
    let image = new Image();
    container.appendChild(image);
    image.src = localStorage.getItem("pangolin");
});
