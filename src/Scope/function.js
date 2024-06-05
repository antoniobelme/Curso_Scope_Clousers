// Function scope

// Cada función va atener su propio alcance.
// las variables declaradas dentro de la función solo van a ser accesibles dentro de la función y en cualquiera de sus funciones anidadas.
function greeting() {
    let useName = 'Ana';
    console.log(useName);

    if (useName === 'Ana') {
        console.log('Hola' + ' ' + useName);
    }
}

greeting();
console.log(useName); // no se puede acceder a la variable porque no ha sido definida fuera de la función, no esta asignada como global.