// Hoisting con variables

// Tercero. Lo que hace el Hoisting o elevación, por defecto, al hacer el llamado con el console se declara la variable sin asignación o Undefined.
var nameOfDog; // Undefined

// primero
console.log(nameOfDog);

// Segundo, la asignació se esta haciendo despues del llamado. 
var nameOfDog = 'Elmo';


// Hoisting con funciones

// Cuearto, El Hoisting eleva la variable, declarandola pero sin asignarle valor, por ende, el correr el código esta variable es impresa como Undefined.
var Elmo; // Undefined

// primero se llama la función.
nameOfDog();

// Segundo, se establece la lógica de la función.
function nameOfDog() {
    console.log('El mejor perro es: ' + Elmo);
}

// tercero se declara y asigna la variable que debe mostrar la función.
var Elmo = 'Elmo';