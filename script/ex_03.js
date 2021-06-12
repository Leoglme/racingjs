let toto = document.querySelectorAll("footer > div");
toto[0].onclick = function() {myFunction()};

function myFunction() {
  var valeur = prompt("Quel est votre nom ?");

  while (valeur == "") {
      var valeur = prompt("Quel est votre nom ?");
  }
  if (confirm("Etes vous sûr que " + valeur + " est votre nom ?")) {
      alert("Bonjour " + valeur + " !");
      toto[0].innerHTML = "Bonjour " + valeur + " !";
  }else {
      myFunction();
  }
}
