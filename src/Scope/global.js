// Variables

var a; // Declarando
var b = 'b'; // declarando y asignando
b = 'bb'; // reasignar
var a = 'aa'; //Redeclaración

// Global Scope

var fruit = 'apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // Al no declarar la variable, y solo asignarle un valor, esta se convierte en global
    console.log(country);
}

countries();
console.log(country);