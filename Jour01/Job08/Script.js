function estNombrePremier(nombre) {
    if (nombre <= 1) return false; 

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) return false;
    }
    return true; 
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 7)); 
console.log(sommeNombresPremiers(10, 13)); 
console.log(sommeNombresPremiers(2, 5)); 

