"use strict";
/*Ejercicio 1
• Usando la clase Auto: Implementar la clase
RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar
de alta
• Partir de función ya implementada para leer
archivos*/
exports.__esModule = true;
var class_RegistroAutomotor_1 = require("./class-RegistroAutomotor");
var class_Auto2_1 = require("./class-Auto2");
var class_ArchivoAuto_1 = require("./class-ArchivoAuto");
var archivo = new class_ArchivoAuto_1["default"]('./info_autos.txt');
var listaAutos = archivo.getListaAutos();
var registro1 = new class_RegistroAutomotor_1["default"]("Registro 1", listaAutos, "Paraguay 500");
console.log(registro1);
//registro1.actualizarAuto("BCD234");
// console.log(registro1.consultarAuto("BCD24"));
//registro1.borrarAuto("BCD2");
registro1.ingresarAuto(new class_Auto2_1["default"]("Chevrolet", "Corsa", "Nafta", "2002", "CDE345"));
console.log(registro1);
