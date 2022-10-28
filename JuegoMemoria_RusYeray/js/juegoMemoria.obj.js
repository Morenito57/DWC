/*He creado la clase tablero que coje de constructor filas y columnas, con la funcion crearTablero() y dibujar tablero.*/
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    /*Inicio la funcion crearTablero().*/
    crearTablero() {

        /*Inicializo la arrayTablero. */
        this.arrayTablero = [];

        /*Creo la variable booleana para salir del bucle de mas alante. */
        let adelante = true;

        /*Hago un bucle para que me haga la tabla si es par y si no que me pregunte otra vez.*/
        while (adelante){

            /*Si filas y columnas son iguales a 2 dara un aviso.*/
            if(this.filas == 2 && this.columnas == 2){
                alert('La tabla que quieres crear es demasiado pequeña, haz el juego mas dificil.');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            }
            /*Si el numero de casillas es divisible entre 2 creara la array bidimensional para guardar las parejas.*/
            if((this.filas * this.columnas) % 2 == 0){

                /*Crea la tabla apartir de los datos proporcionados.*/
                for (let fila = 0; fila < this.filas; fila++) {
                    this.arrayTablero[fila] = [];

                    for (let columna = 0; columna < this.columnas; columna++) {
                        this.arrayTablero[fila][columna] = '';
                    }
                }
                /*Sale del bucle*/
                adelante = false;
            }

            /*Si las filas o columnas son iguales o menores a cero da un aviso.*/
            else if(this.filas <= 0 || this.columnas <= 0){
                alert('El numero que has introducido de filas o columnas es igual o menor a cero, introduce un numero de filas y columnas mas alto.');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            /*Si el numero de casillas no es divisible entre 2 o no son datos validos da un aviso*/
            }else if((this.filas * this.columnas) % 2 != 0){
                alert('El numero que has introducido de filas o columnas es impar o no son validos, introduzca otra vez los datos');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');

            }
        }
        
    }

    /*Esta funcion dibuja el tablero en el archivo html. */
    dibujarTablero() {
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

/*Aqui creo la classe memoria que hereda de tablero y que utiliza sus constructores, y tiene la funcion colocarParejas(). */
class Memoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);

        this.colocarParejas();
    }

    /*Inicio la funcion colocarParejas(). */
    colocarParejas() {
        /*La variable repetir lo utilizo para los bucles para que se repita. */
        let repetir = true;

        /*La variable posFila lo utilizare para la posiciones de las filas de la array. */
        let posFila = 0;

        /*La variable posColumna lo utilizare para la posiciones de las Columna de la array. */
        let posColumna = 0;

        /*La variable contador_parejas la utilizo para llevar un recuento de las parejas que llevo imprimidas. */
        let contador_parejas = 1;

        /*La variable contadorNumParejas la utilizo como contador para saber cuando terminar de añadir parejas. */
        let contadorNumParejas = 0;

        /*La variable maxParejas es para saber cuantas parejas hay que añadir. */
        let maxParejas = (this.columnas * this.filas) / 2;

        /*Inicio el bucle para añadir la primera parte de la parejas. */
        while (contadorNumParejas < maxParejas) {

            /*Añado numeros aleatorias a posFila y posColumna. */
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            /*Compruebo si la posicion del array esta vacia. */
            if (this.arrayTablero[posFila][posColumna] == '') {

                /*Añado la primera parte de la pareja a la tabla. */
                this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";
                
                /*Me meto en otro bucle para añadir la segunda parte de la parejas. */
                while (repetir) {

                    /*Añado numeros aleatorias a posFila y posColumna. */
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);
        
                    /*Compruebo si la posicion del array esta vacia. */
                    if (this.arrayTablero[posFila][posColumna] == '') {

                        /*Añado la primera parte de la pareja a la tabla. */
                        this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";

                        /*Paso la variable repetir a false para salir del bucle */
                        repetir = false;
                    };
                };

                contador_parejas++;
                contadorNumParejas++;

                /*Paso la variable repetir a true para el siguiente bucle. */
                repetir = true;
            };

            /*Miro si voy por el 10 pareja */
            if (contador_parejas == 10) {

                /*Me meto en otro bucle para añadir la primera parte de la parejas. */
                while (repetir) {

                    /*Añado numeros aleatorias a posFila y posColumna. */
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);

                    /*Compruebo si la posicion del array esta vacia. */
                    if (this.arrayTablero[posFila][posColumna] == '') {

                        /*Añado la primera parte de la pareja a la tabla. */
                        this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";

                        /*Me meto en otro bucle para añadir la segunda parte de la parejas. */
                        while (repetir) {

                            /*Añado numeros aleatorias a posFila y posColumna. */
                            posFila = Math.floor(Math.random() * this.filas);
                            posColumna = Math.floor(Math.random() * this.columnas);

                            /*Compruebo si la posicion del array esta vacia. */
                            if (this.arrayTablero[posFila][posColumna] == '') {

                                /*Añado la primera parte de la pareja a la tabla. */
                                this.arrayTablero[posFila][posColumna] = "<img src='img/"+contador_parejas+".png'>";

                                /*Paso la variable repetir a true para el siguiente bucle. */
                                repetir = false;
                            }
                        }
                    }
                }

                /*Y contador pareja vuelve a ser 1 para empezar desde el principio con las parejas*/
                contador_parejas = 1;
                contadorNumParejas++;

                /*Paso la variable repetir a true para el siguiente bucle. */
                repetir = true;

            }


        }
    }

}


let tablero1 = new Memoria( prompt('¿Cuántas filas quieres en la tabla?'), prompt('¿Cuántas columnas quieres en la tabla?'));
console.log(tablero1.arrayTablero);
tablero1.dibujarTablero();