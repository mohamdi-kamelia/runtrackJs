$(document).ready(function() {
    $('#inscriptionForm').submit(function(event) {
        event.preventDefault();
        // Réinitialiser les messages d'erreur
        $('.error').text('');
        
        // Validation des champs
        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var codePostal = $('#codePostal').val(); // Récupération du code postal
        
        var isValid = true;

        if (nom.trim() === '') {
            $('#nomError').text('Veuillez saisir votre nom.');
            isValid = false;
        }

        if (prenom.trim() === '') {
            $('#prenomError').text('Veuillez saisir votre prénom.');
            isValid = false;
        }

        if (email.trim() === '') {
            $('#emailError').text('Veuillez saisir votre adresse email.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#emailError').text('Veuillez saisir une adresse email valide.');
            isValid = false;
        }

        if (password.trim() === '') {
            $('#passwordError').text('Veuillez saisir votre mot de passe.');
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('Le mot de passe doit contenir au moins 6 caractères.');
            isValid = false;
        }
        
        // Validation du code postal
        if (codePostal.trim() === '') {
            $('#codePostalError').text('Veuillez saisir votre code postal.');
            isValid = false;
        } else if (isNaN(codePostal)) { 
            $('#codePostalError').text('Le code postal doit être un nombre.');
            isValid = false;
        }

        // Si le formulaire est valide, vous pouvez soumettre les données au serveur
        if (isValid) {
            // Soumission du formulaire ou autre traitement
            alert('Formulaire valide, envoi des données au serveur.');
        }
    });

    $('#connexionForm').submit(function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs email et mot de passe
        var email = $('#email').val();
        var password = $('#password').val();

        // Vérifier si les valeurs correspondent à celles attendues
        if (email === "kamelia.mohamdi@laplateforme.com" && password === "kamelia1234") {
            // Afficher un message de connexion réussie
            alert('Connexion réussie !');
        } else {
            // Afficher un message d'erreur si les informations de connexion sont incorrectes
            alert('Erreur : Adresse email ou mot de passe incorrect.');
        }
    });
});

// Fonction de validation d'email simple
function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
