class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero() {

        this.arrayTablero = [];

        let adelante = true;
        while (adelante){

            if((this.filas * this.columnas) % 2 == 0){

                // Crear array bidimensional para guardar las minas

                for (let fila = 0; fila < this.filas; fila++) {
                    this.arrayTablero[fila] = [];

                    for (let columna = 0; columna < this.columnas; columna++) {
                        this.arrayTablero[fila][columna] = '';
                    }
                }

                adelante = false;
            }else{
                alert('El numero de casillas de la tabla es impar, introduzca otra vez las dimensiones de la tabla');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');
            }
        }
        


    }

    dibujarTablero() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

}

class Memoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);

        this.colocarParejas();
    }

    colocarParejas() {
        let posFila;
        let posColumna;
        let contador_parejas = 1;
        let contadorNumParejas = 0;
        let maxParejas = (maxColumnas * maxFilas) / 2;

        while (contadorNumParejas < maxParejas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] = '') {
                this.arrayTablero[posFila][posColumna] = contador_parejas;
                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);
                this.arrayTablero[posFila][posColumna] = contador_parejas;
                contador_parejas++;
                contadorNumParejas++;
            };
            if (contador_parejas = 10) {
                this.arrayTablero[posFila][posColumna] = contador_parejas;
                posFila = Math.floor(Math.random() * this.filas);
                posColumna = Math.floor(Math.random() * this.columnas);
                this.arrayTablero[posFila][posColumna] = contador_parejas;
                contador_parejas = 1;
                contadorNumParejas++;
            };


        };
    }

}

let tablero1 = new Tablero( prompt('¿Cuántas filas quieres en la tabla?'), prompt('¿Cuántas columnas quieres en la tabla?'));
console.log(tablero1.arrayTablero);
tablero1.dibujarTablero();