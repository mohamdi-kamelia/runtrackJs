// Récupérer l'élément bouton et le paragraphe compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialiser le compteur de clics
var nombreClics = 0;

// Définir la fonction de mise à jour du compteur
function mettreAJourCompteur() {
    // Incrémenter le compteur de clics
    nombreClics++;
    // Mettre à jour le contenu du paragraphe compteur avec le nouveau nombre de clics
    compteur.textContent = nombreClics;
}

// Ajouter un écouteur d'événements pour le clic sur le bouton
button.addEventListener("click", mettreAJourCompteur);
