// Block Scope

// Su alcance significa que las variables definidas dentro de un bloque solo pueden ser usadas dentro de este. Se puede usar let y const para declarar variables bajo este concepto.

function fruits() {
    //Un bloque es cualquier código que este dentro de un {}.
    if (true){
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Bannana'; // Block Scope
    }
    console.log(fruit1); // Esta variable usar la palabra reservada var, lo que permite acceder a ella fuera del bloque.
    console.log(fruit2);
    console.log(fruit3);
}

fruits();