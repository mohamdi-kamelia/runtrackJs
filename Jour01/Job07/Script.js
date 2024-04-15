function jourTravaille(date) {
    const joursFeries2024 = [
        "2024-01-01", // Jour de l'an
        "2024-04-22", // féte de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-07-14", // féte Nationale
        "2024-12-25"  // Noël
    ];

    const jourSemaine = date.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 6 = Samedi
    const mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    const jour = date.getDate();
    const annee = date.getFullYear();

    const dateStr = jour + "/" + mois + "/" + annee;

    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + dateStr + " est un week-end.");
    } else if (joursFeries2024.includes(date.toISOString().substring(0, 10))) {
        console.log("Le " + dateStr + " est un jour férié.");
    } else {
        console.log("Oui, " + dateStr + " est un jour travaillé.");
    }
}

// Exemple d'utilisation
jourTravaille(new Date(2024, 0, 1)); 
jourTravaille(new Date(2024, 4, 1)); 
jourTravaille(new Date(2024, 12, 14)); 
jourTravaille(new Date(2024, 5, 27)); 
jourTravaille(new Date(2024, 3, 28)); 
jourTravaille(new Date(2024, 3, 29)); 
