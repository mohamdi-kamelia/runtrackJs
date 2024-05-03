document.addEventListener("DOMContentLoaded", function() {
    const updateBtn = document.getElementById("updateBtn");
    const userTableBody = document.getElementById("userBody");

    updateBtn.addEventListener("click", function() {
        fetch("utilisateur.json")
            .then(response => response.json())
            .then(data => {
                // Effacer le contenu actuel du tableau
                userTableBody.innerHTML = "";

                // Parcourir les données JSON et les ajouter au tableau
                data.forEach(user => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    `;
                    userTableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Erreur lors de la récupération des utilisateurs:", error));
    });

    // Mettre à jour le tableau lors du chargement initial de la page
    updateBtn.click();
});
