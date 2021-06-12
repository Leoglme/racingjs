let toto = document.querySelectorAll("footer > div");
toto[0].onclick = function() {myFunction()};
let i = 0;

function myFunction() {
  i += 1;
  toto[0].innerHTML = i;
}
