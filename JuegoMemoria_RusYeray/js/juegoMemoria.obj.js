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
            if(this.filas == 2 && this.columnas == 2){
                alert('La tabla que quieres crear es demasiado pequeña, haz el juego mas dificil.');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            }
            if((this.filas * this.columnas) % 2 == 0){

                // Crear array bidimensional para guardar las minas

                for (let fila = 0; fila < this.filas; fila++) {
                    this.arrayTablero[fila] = [];

                    for (let columna = 0; columna < this.columnas; columna++) {
                        this.arrayTablero[fila][columna] = '';
                    }
                }

                adelante = false;
            }
            else if(this.filas <= 0 || this.columnas <= 0){
                alert('El numero que has introducido de filas o columnas es igual o menor a cero, introduce un numero de filas y columnas mas alto.');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            }else if((this.filas * this.columnas) % 2 != 0){
                alert('El numero que has introducido de filas o columnas es impar o no son validos, introduzca otra vez los datos');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            }
        }
        


    }

    dibujarTablero() {
        // Creamos el tablero en html
        document.write('<h1>Juego de memoria</h1>');
        document.write('<h2>Yeray Rus Martinez</h2>');
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
        let repetir = true;
        let posFila = 0;
        let posColumna = 0;
        let contador_parejas = 1;
        let contadorNumParejas = 0;
        let maxParejas = (this.columnas * this.filas) / 2;

        while (contadorNumParejas < maxParejas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
            if (this.arrayTablero[posFila][posColumna] == '') {
                this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";
                

                while (repetir) {
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);
        
                    if (this.arrayTablero[posFila][posColumna] == '') {
                        this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";
                        repetir = false;
                    };
                };

                contador_parejas++;
                contadorNumParejas++;
                repetir = true;
            };
            if (contador_parejas == 10) {


                while (repetir) {
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);
                    if (this.arrayTablero[posFila][posColumna] == '') {
                        this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";
                        while (repetir) {
                            posFila = Math.floor(Math.random() * this.filas);
                            posColumna = Math.floor(Math.random() * this.columnas);
                
                            if (this.arrayTablero[posFila][posColumna] == '') {
                                this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";
                                repetir = false;
                            }
                        }
                    }
                }

                contador_parejas = 1;
                contadorNumParejas++;
                repetir = true;

            }


        }
    }

}

let tablero1 = new Memoria( prompt('¿Cuántas filas quieres en la tabla?'), prompt('¿Cuántas columnas quieres en la tabla?'));
console.log(tablero1.arrayTablero);
tablero1.dibujarTablero();