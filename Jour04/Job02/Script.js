function jsonValueKey(jsonString, key) {
    try {
        const obj = JSON.parse(jsonString);
        return obj[key];
    } catch (error) {
        console.error("Erreur lors de l'analyse de la chaîne JSON :", error);
        return null;
    }
}

document.getElementById("testButton").addEventListener("click", function() {
    const jsonString = document.getElementById("jsonString").value;
    const key = document.getElementById("key").value;
    const result = jsonValueKey(jsonString, key);
    document.getElementById("result").textContent = result !== null ? result : "Clé introuvable ou erreur JSON";
});
