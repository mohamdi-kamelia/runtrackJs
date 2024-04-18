
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

var nombreClics = 0;

function mettreAJourCompteur() {
   
    nombreClics++;
   
    compteur.textContent = nombreClics;
}


button.addEventListener("click", mettreAJourCompteur);
