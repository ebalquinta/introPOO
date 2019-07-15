/*Ejercicio 2
• Implementar la clase Matriz. En vez de consultar
los valores con los corchetes, se debe hacer
(desde afuera) a través de un método → get(x, y) */

import MatrizTxt from './class-MatrizTxt';

let matrizTxt = new MatrizTxt('./info_autos.txt');
console.log(matrizTxt);
console.log(matrizTxt.get(2,5));