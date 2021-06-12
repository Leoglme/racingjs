function Hero(nom, genre, intelligence, force) {
    let toto = document.querySelectorAll("footer > div");
    this.nom = nom;
    this.genre = genre;
    this.intelligence = intelligence;
    this.force = force;
    this.toString = function () {
        // alert('Je suis ' + this.nom + ' le ' + this.genre + ' , j\'ai ' + this.intelligence + ' points d\'intelligence et ' + this.force + ' points de force !')
        toto[0].innerHTML += 'Je suis ' + this.nom + ' le ' + this.genre + ' , j\'ai ' + this.intelligence + ' points d\'intelligence et ' + this.force + ' points de force !' + '<br>';
    };
}


var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
