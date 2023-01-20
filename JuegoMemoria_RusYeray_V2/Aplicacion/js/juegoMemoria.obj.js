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

            /*Si filas y columnas son mas grandes que 100 que de un aviso.*/
            if(this.filas > 50 || this.columnas > 50){
                alert('La tabla que quieres crear es demasiado grande, te has pasado 4 pueblos.');
                this.filas = prompt('¿Cuántas filas quieres en la tabla?');
                this.columnas = prompt('¿Cuántas columnas quieres en la tabla?');
            }

            /*Si el numero de casillas es divisible entre 2 creara la array bidimensional para guardar las parejas.*/
            else if((this.filas * this.columnas) % 2 == 0){

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

    dibujarTableroDOM(){
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let h1 = document.createElement('h1');
        let h2 = document.createElement('h2');
        let puntuacion = document.createElement('p');
        let reiniciar = document.createElement('a');

        let fila;
        let columna;
        
        h1.innerHTML = 'Juego de memoria';
        h2.innerHTML = 'Yeray Rus Martinez';
        puntuacion.id = 'puntos';
        puntuacion.innerHTML = 0+'/'+((this.filas*this.columnas)/2)*10;

        reiniciar.setAttribute('href','index.html');
        reiniciar.setAttribute('onclick','return confirmarAccesoURL()');
        reiniciar.innerHTML = 'Reiniciar';


        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                columna.dataset.despejado = false;
                fila.appendChild(columna);
            }
        }
        document.body.appendChild(h1);
        document.body.appendChild(h2);
        document.body.appendChild(puntuacion);
        document.body.appendChild(reiniciar);
        document.body.appendChild(tabla);

    }

}

/*Aqui creo la classe memoria que hereda de tablero y que utiliza sus constructores, y tiene la funcion colocarParejas(). */
class Memoria extends Tablero {
    constructor(filas, columnas) {
        super(filas, columnas);

        this.numParejasDespejadas = filas * columnas / 2;

        this.contadorParejasDestapadas = 0;
        this.numIntentos = 1;

        this.rutaPareja1;
        this.rutaPareja2;
        this.valorPareja1;
        this.valorPareja2;

        this.puntosJugador = 0;

        this.contador_s = 0;
        this.contador_m = 0;

        this.colocarParejas();
        this.dibujarTableroDOM();
        this.cronometro();
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
                this.arrayTablero[posFila][posColumna] = contador_parejas;
                
                /*Me meto en otro bucle para añadir la segunda parte de la parejas. */
                while (repetir) {

                    /*Añado numeros aleatorias a posFila y posColumna. */
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);
        
                    /*Compruebo si la posicion del array esta vacia. */
                    if (this.arrayTablero[posFila][posColumna] == '') {

                        /*Añado la primera parte de la pareja a la tabla. */
                        this.arrayTablero[posFila][posColumna] = contador_parejas;

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
                        this.arrayTablero[posFila][posColumna] = contador_parejas;

                        /*Me meto en otro bucle para añadir la segunda parte de la parejas. */
                        while (repetir) {

                            /*Añado numeros aleatorias a posFila y posColumna. */
                            posFila = Math.floor(Math.random() * this.filas);
                            posColumna = Math.floor(Math.random() * this.columnas);

                            /*Compruebo si la posicion del array esta vacia. */
                            if (this.arrayTablero[posFila][posColumna] == '') {

                                /*Añado la primera parte de la pareja a la tabla. */
                                this.arrayTablero[posFila][posColumna] = contador_parejas;

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

    dibujarTableroDOM(){
        super.dibujarTableroDOM();
        this.cronometro();

        let celda;

        this.despejar = this.despejar.bind(this);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++){
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('contextmenu', this.despejar);
            }
        }
        console.log(this.arrayTablero);
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        
        this.despejarCelda(celda);
    }
    despejarCelda(celda) {
        document.oncontextmenu = function(){return false}

        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);

        let imagen = document.createElement('img');
        
        this.contadorParejasDestapadas++;



        if(this.contadorParejasDestapadas == 1 && celda.lastChild == null){
            this.valorPareja1 = this.arrayTablero[fila][columna];
            celda.appendChild(imagen);
            this.rutaPareja1 = celda;
            imagen.src = "img/"+this.valorPareja1+".png";
        }else if (this.contadorParejasDestapadas == 2 && celda.lastChild == null){
            this.valorPareja2 = this.arrayTablero[fila][columna];
            celda.appendChild(imagen);
            this.rutaPareja2 = celda;
            imagen.src = "img/"+this.valorPareja2+".png";

            if(this.valorPareja1 == this.valorPareja2 && this.numIntentos == 1){
                this.puntosJugador = this.puntosJugador + 10;
                this.contadorParejasDestapadas = 0;
                this.numIntentos = 1;
                document.getElementById('puntos').innerHTML=this.puntosJugador+'/'+((this.filas*this.columnas)/2)*10;
                this.rutaPareja1.dataset.despejado = true;
                this.rutaPareja2.dataset.despejado = true;
                this.numParejasDespejadas--;
            }else if(this.valorPareja1 == this.valorPareja2 && this.numIntentos == 2){
                this.puntosJugador = this.puntosJugador + 5;
                this.contadorParejasDestapadas = 0;
                this.numIntentos = 1;
                document.getElementById('puntos').innerHTML=this.puntosJugador+'/'+((this.filas*this.columnas)/2)*10;
                this.rutaPareja1.dataset.despejado = true;
                this.rutaPareja2.dataset.despejado = true;
                this.numParejasDespejadas--;
            }else if(this.valorPareja1 == this.valorPareja2 && this.numIntentos == 3){
                this.puntosJugador = this.puntosJugador + 2.5;
                this.contadorParejasDestapadas = 0;
                this.numIntentos = 1;
                document.getElementById('puntos').innerHTML=this.puntosJugador+'/'+((this.filas*this.columnas)/2)*10;
                this.rutaPareja1.dataset.despejado = true;
                this.rutaPareja2.dataset.despejado = true;
                this.numParejasDespejadas--;
            }else if(this.valorPareja1 == this.valorPareja2 && this.numIntentos > 3){
                this.puntosJugador = this.puntosJugador + 0;
                this.contadorParejasDestapadas = 0;
                this.numIntentos = 1;
                document.getElementById('puntos').innerHTML=this.puntosJugador+'/'+((this.filas*this.columnas)/2)*10;
                this.rutaPareja1.dataset.despejado = true;
                this.rutaPareja2.dataset.despejado = true;
                this.numParejasDespejadas--;
            }else{
                function darLaVuelta(){
                    this.contadorParejasDestapadas = 0;
                    this.numIntentos++;
                    this.rutaPareja1.removeChild( this.rutaPareja1.lastChild);
                    this.rutaPareja2.removeChild( this.rutaPareja2.lastChild);
                }
                setTimeout(darLaVuelta.bind(this), 1000);

            }

            if (this.numParejasDespejadas == 0){
                    this.resolverTablero(true);
            }
        }
    }

    cronometro() {

        function tiempo(){
            if(this.contador_s == 60){
                this.contador_s = 0;
                this.contador_m++;
            }
            this.contador_s++;
        }
        setInterval(tiempo.bind(this),1000);

        }


    resolverTablero(hasGanado) {

        if (hasGanado) {
            alert('ENHORABUENA, HAS GANADO CON '+this.puntosJugador+' PUNTOS EN UN TIEMPO DE '+ this.contador_m+':'+this.contador_s+' .');
        } else {
            alert('LO SIENTO, HAS PERDIDO');
        }
    }
}


window.onload = function() {
    let tablero1 = new Memoria( prompt('¿Cuántas filas quieres en la tabla?'), prompt('¿Cuántas columnas quieres en la tabla?'));
}