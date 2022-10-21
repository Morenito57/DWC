adelante = true;
while (adelante){
    let maxFilas = prompt('¿Cuántas filas quieres en la tabla?');
    let maxColumnas = prompt('¿Cuántas columnas quieres en la tabla?');

    if((maxFilas * maxColumnas) % 2 == 0){
        adelante = false;
    }else{
        alert('El numero de casillas de la tabla es impar, introduzca otra vez las dimensiones de la tabla');
    }
}