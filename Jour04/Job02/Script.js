function jsonValueKey(jsonString, key) {
    // Convertir la chaîne JSON en objet JavaScript
    var jsonObject = JSON.parse(jsonString);
    
    // Vérifier si la clé existe dans l'objet
    if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
    } else {
        return "Clé non trouvée";
    }
}

// Exemple d'utilisation
var jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
var key = "city";
console.log(jsonValueKey(jsonString, key)); // Output: Marseille
