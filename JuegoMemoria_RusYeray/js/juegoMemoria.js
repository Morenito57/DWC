//Preguntamos al usuario las dimensiones de la tabla, y si el numero de casillas es impar da un error y vuelve a preguntar al usuario

adelante = true;
let maxFilas = 0;
let maxColumnas = 0;
while (adelante){
    let maxFilas = prompt('¿Cuántas filas quieres en la tabla?');
    let maxColumnas = prompt('¿Cuántas columnas quieres en la tabla?');

    if((maxFilas * maxColumnas) % 2 == 0){
        adelante = false;
    }else{
        alert('El numero de casillas de la tabla es impar, introduzca otra vez las dimensiones de la tabla');
    }
}

// Crear array bidimensional para guardar las parejas


function crearTablero(maxFilas, maxColumnas){

    let arrayTablero = [];

    for (let fila = 0; fila < maxFilas; fila++) {
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columna = 0; columna < maxColumnas; columna++) {
            arrayTablero[fila][columna] = '';
        }
    }
        return arrayTablero;
}

// Creamos el tablero en html
function pintarTablero(arrayTablero, maxFilas, maxColumnas) {
    document.write('<table>');
    
    for (let i = 0; i < maxFilas; i++) {
        document.write('<tr>');
    
        for (let j = 0; j < maxColumnas; j++) {
            document.write('<td>');
            document.write(arrayTablero[i][j]);
            document.write('</td>');
    
        }
    
        document.write('</tr>');
    }
    document.write('</table>');
    
}
    
let tablero = crearTablero(maxFilas, maxColumnas);
pintarTablero(tablero, maxFilas, maxColumnas);
