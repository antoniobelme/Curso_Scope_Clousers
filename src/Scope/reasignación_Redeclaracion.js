// Reasignación y Redeclaración

// Declaración 

// Var
var firstName; //Undefined // Declaración
firstName = 'Oscar'; //ASignación
console.log(firstName); 

var lastName = 'David'; // DEcalración y asignación
lastName = 'Ana'; //Reasignación
console.log(lastName); 

var secondName = 'David'; // DEcalración y asignación
var secondName = 'Ana'; // Reasignación
console.log(secondName); 

// Let
let fruit = 'Apple'; // Declarar y asignar
fruit = 'Kiwi'; // Reasirgnar, con let puedo reasignar pero no redeclarar.
console.log(fruit); 

let fruit = 'Bannana'; // Redeclaración.
console.log(fruit);  


// Const
const animal = 'Dog'; // Declaración y asignación
animal = 'Cat'; // Reasignar, no es posible reasignar en const, tampoco redeclarar.
console.log(animal); 

const vehicles = [];
vehicles.push('Carro');
console.log(vehicles); 

vehicles.pop();
console.log(vehicles); // Esto no es una reasignación o redeclaración, esto es una modificación del array, mas no de la variable, or medio de metodos puedo modificar el arreglo, sin embargo, la referencia 'vehicles' no es modificada.
