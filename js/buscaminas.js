let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿Cuántas columnas quieres?');
let numMinas = prompt('¿Cuántas minas quieres introducir?');


// Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;


function crearTablero(maxFilas, maxColumnas){

    for (let fila = 0; fila < maxFilas; fila++) {
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columna = 0; columna < maxColumnas; columna++) {
            arrayTablero[fila][columna] = '';
        }
    }
}


let posFila;
let posColumna;

function anadirMinas(posFila, posColumna, numMinas){

    while (contadorMinas < numMinas) {
        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);

        if (arrayTablero[posFila][posColumna] != 'MINA') {
            arrayTablero[posFila][posColumna] = 'MINA';
            contadorMinas++;
        };
    };
}



let numMinasAlrededor;

function anadirPosicion(numMinasAlrededor){

    for (let fila = 0; fila < maxFilas; fila++) {
        for (let columna = 0; columna < maxColumnas; columna++) {
            numMinasAlrededor = 0;
            if (arrayTablero[fila][columna] != 'MINA') {
                for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                    if (cFila >= 0 && cFila < maxFilas) {
                        for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                            if (cColumna >= 0 && cColumna < maxColumnas &&
                                arrayTablero[cFila][cColumna] == 'MINA') {
                                numMinasAlrededor++;
                            }
                        }
                    }
                    arrayTablero[fila][columna] = numMinasAlrededor;
                }
            }
        }
    }
}


// Creamos el tablero en html
function pintarTablero(arrayTablero, filas, columnas) {
document.write('<table>');

for (let i = 0; i < filas; i++) {
    document.write('<tr>');

    for (let j = 0; j < columnas; j++) {
        document.write('<td>');
        document.write(arrayTablero[i][j]);
        document.write('</td>');

    }

    document.write('</tr>');
}
document.write('</table>');
}
crearTablero(maxFilas, maxColumnas);
anadirMinas(posFila, posColumna, numMinas);
anadirPosicion(numMinasAlrededor);
pintarTablero(arrayTablero, maxFilas, maxColumnas);
