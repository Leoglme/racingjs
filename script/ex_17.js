const poids = document.querySelectorAll('footer > div')[2];
let poidsTop = parseInt(window.getComputedStyle(poids, null).getPropertyValue("top"), 10);

let masse = 1000; //unité = grammes
let volume = 10000; //unité = cm3
let masseVolumique; // masse_volumique= m/v
let gravite = 9.81; // L'accélération de la pesanteur = 9,806 65 newtons par kilogramme
let Fa;  //poussée d'Archimède = V × m × g ==> volume × densité × gravité
let speed;

let j = 0.00001;
let i = 1;
poids.innerHTML = i;

poids.addEventListener("click" ,function (){
    i++
    poids.innerHTML = i;
    masse += 1000;
    masseVolumique = masse / volume;
    Fa = masseVolumique * volume * gravite;
    speed = Fa;
    setInterval(movement);
});
function movement() {
        if (poidsTop < 1150) {
            poidsTop += j * speed;
            poids.style.top = poidsTop + "px";
        }
}