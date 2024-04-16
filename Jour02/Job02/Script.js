// Définir la fonction showhide
function showhide() {
    // Récupérer l'élément conteneur
    var container = document.getElementById("container");
    // Vérifier si l'article est déjà affiché
    if (container.innerHTML.trim() === '') {
        // Si non, ajouter l'article au contenu de la page
        container.innerHTML = '<article id="article">L\'important n\'est pas la chute, mais l\'atterrissage.</article>';
    } else {
        // Si oui, supprimer l'article du contenu de la page
        container.innerHTML = '';
    }
}
