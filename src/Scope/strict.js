// Strickt mode

// Permite ejecutar de forma estricta unas reglas para tener mejor control de asignación de variables entre otros para que el código cumpla con el mayor de los estandares.

'use strict'; // Permite establecer un modo estricto en la generación de código para asegurar el cumplimineto de las reglas en JS.
pi = 3.1416; // se asigna sin declarar
console.log(pi);

function myFunction() {
    'use strict'; // Es buena practica activar esta opción. 
    return pi = 3.1416;
}
console.log(myFunction());