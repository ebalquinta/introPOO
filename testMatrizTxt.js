"use strict";
/*Ejercicio 2
• Implementar la clase Matriz. En vez de consultar
los valores con los corchetes, se debe hacer
(desde afuera) a través de un método → get(x, y) */
exports.__esModule = true;
var class_MatrizTxt_1 = require("./class-MatrizTxt");
var matrizTxt = new class_MatrizTxt_1["default"]('./info_autos.txt');
console.log(matrizTxt);
console.log(matrizTxt.get(2, 5));
