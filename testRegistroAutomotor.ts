/*Ejercicio 1
• Usando la clase Auto: Implementar la clase
RegistroAutomotor con métodos para consultar
por un auto en un listado, borrar, actualizar y dar
de alta
• Partir de función ya implementada para leer
archivos*/

import RegistroAutomotor from './class-RegistroAutomotor';
import Auto from './class-Auto2';
import ArchivoAuto from './class-ArchivoAuto';

let archivo: ArchivoAuto = new ArchivoAuto('./info_autos.txt');
let listaAutos: Auto[] = archivo.getListaAutos();

let registro1 = new RegistroAutomotor("Registro 1",listaAutos,"Paraguay 500");
console.log(registro1);
//registro1.actualizarAuto("BCD234");
// console.log(registro1.consultarAuto("BCD24"));
//registro1.borrarAuto("BCD2");
registro1.ingresarAuto(new Auto("Chevrolet","Corsa","Nafta","2002","CDE345"));
console.log(registro1);