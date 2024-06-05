function greeting(){
    let userName = 'Oscar';

    function displayUserName(){
        return 'Hola' + ' ' + userName;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // En este llamado estamos retornando la definicion de la función.
console.log(g()); // En este llamado nos entrega el valor de la función. Accedee al ambito lexico y Recuerda el contexto. 