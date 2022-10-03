
let maxFilas = prompt('¿Cuantas filas quieres?');
let maxColumnas = prompt('¿Cuantas columnas quieres?');
let numMinas = prompt('¿Cuantas minas quieres intraducir?');


// Creamos el tablero en html
document.write('<table>');

for (let i = 0; i < maxFilas; i++) {
    document.write('<tr>');
    for (let i = 0; i < maxColumnas; i++) {
        document.write('<td></td>');
    }
    document.write('</tr>');

}
document.write('</table>');

// Crear array bidimensual para guardar las minas

let arrayTablero =[];

for (let mina = 0; mina < numMinas; mina++) {
    posFila = Math.floor(Math.random()*maxFilas);
    console.log(posFila);
    //arrayTablero[posFila][posColumna] = 'MINA';
}
console.log(arrayTablero);

/*<tr>
      
<td>1</td>

<td>Mina</td>

<td>1</td>

<td>1</td>

<td>1</td>

</tr>

<tr>

<td>2</td>

<td>2</td>

<td>1</td>

<td>1</td>

<td>Mina</td>

</tr>

<tr>

<td>Mina</td>

<td>2</td>

<td>1</td>

<td>2</td>

<td>1</td>

</tr>

<tr>

<td>1</td>

<td>2</td>

<td>Mina</td>

<td>2</td>

<td>1</td>

</tr>


<tr>

<td>0</td>

<td>1</td>

<td>2</td>

<td>Mina</td>

<td>1</td>

</tr>
*/