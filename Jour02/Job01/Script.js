// Définir la fonction citation
function citation() {
    // Récupérer le contenu de l'élément avec l'ID "citation"
    var citationText = document.getElementById("citation").textContent;
    // Afficher le contenu dans la console de développement
    console.log(citationText);
}

// Ajouter un écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);
