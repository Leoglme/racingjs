let container = document.querySelector("footer > div");
let image = new Image();
let delai;
image.src = localStorage.getItem("pangolin");
container.appendChild(image);
let defaultWidth = image.width;
let defaultHeight = image.height;

image.onclick = function() {
  localStorage.removeItem("pangolin");
  container.removeChild(image);
};


image.onmouseover = function tafonction(){
  clearTimeout(delai);
  delai = setTimeout(tafonction,1000);
  image.width -= (1 / 100) * image.width;
  image.height -= (1 / 100) * image.height;
}

image.onmouseout = function bidule(){
  clearTimeout(delai);
  delai = setTimeout(bidule,1000);
  if (image.width <= defaultWidth && image.height <= defaultHeight) {
    image.width += (1 / 100) * image.width;
    image.height += (1 / 100) * image.height;
  }
}
