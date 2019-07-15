"use strict";
exports.__esModule = true;
var class_LectorArchivo_1 = require("./class-LectorArchivo");
var MatrizTxt = /** @class */ (function () {
    function MatrizTxt(rutaArchivo) {
        this.lectorArchivo = new class_LectorArchivo_1["default"](rutaArchivo);
        this.matriz = this.cargarMatriz(this.lectorArchivo.leerArchivo());
        this.filas = this.matriz.length;
        this.columnas = this.matriz[0].length;
    }
    // private leerArchivo(rutaArchivo: string): string[] {
    //     let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    //     let lineas: string[] = archivo.split('\n');
    //     lineas = lineas.map(linea => linea.replace('\r', ''));
    //     return lineas;
    // }
    MatrizTxt.prototype.inicializarMatriz = function (arr) {
        var matriz = new Array(arr.length);
        var maxCol = arr[0].split(",").length;
        for (var i = 0; i < arr.length; i++) {
            matriz[i] = new Array(maxCol);
        }
        return matriz;
    };
    MatrizTxt.prototype.cargarMatriz = function (arrText) {
        var matrix = this.inicializarMatriz(arrText);
        for (var indiceFila = 0; indiceFila < arrText.length; indiceFila++) {
            var fila = arrText[indiceFila].split(",");
            for (var indiceColumna = 0; indiceColumna < arrText[indiceFila].split(",").length; indiceColumna++) {
                matrix[indiceFila][indiceColumna] = fila[indiceColumna];
            }
        }
        return matrix;
    };
    MatrizTxt.prototype.get = function (x, y) {
        if (0 <= x - 1 && x - 1 < this.filas && 0 <= y - 1 && y - 1 < this.columnas)
            return this.matriz[x - 1][y - 1];
        else
            return "coordenadas fuera de rango";
    };
    return MatrizTxt;
}());
exports["default"] = MatrizTxt;
