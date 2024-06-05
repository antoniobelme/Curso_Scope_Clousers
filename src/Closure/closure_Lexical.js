// Closure

// Permite acceder al ambito de una función exterior desde una función interior. En JS, las clausuras se crean cada vez que una función es creada.

// A diferencia de otros conceptos como las funciones, variables u otros, Los closure no son siemrpe utilizados.

// Hay una closure cuando una función accede a una variable fuera de su contexto. 

const myGlobal = 0;

function myFunction() { // Función externa
    const myNumber = 1;
    console.log(myNumber);

    function parent() { //Función interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();

// El ambito lexico significa que la accesibilidad de las variables esta determinada por la posición de las mismas dentro de los ambitos anidados.