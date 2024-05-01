$(document).ready(function() {
    // Fonction pour charger les utilisateurs depuis le fichier JSON
    function loadUsers() {
        $.getJSON('utilisateur.json', function(users) {
            var tableRows = '';
            users.forEach(function(user) {
                tableRows += '<tr>';
                tableRows += '<td>' + user.id + '</td>';
                tableRows += '<td>' + user.nom + '</td>';
                tableRows += '<td>' + user.prenom + '</td>';
                tableRows += '<td>' + user.email + '</td>';
                tableRows += '</tr>';
            });
            $('#userTable tbody').html(tableRows);
        });
    }

    // Charger les utilisateurs initialement
    loadUsers();

    // Mettre à jour les utilisateurs lorsqu'on clique sur le bouton "Update"
    $('#updateBtn').click(function() {
        loadUsers();
    });
});
