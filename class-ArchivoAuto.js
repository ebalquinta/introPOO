"use strict";
exports.__esModule = true;
var class_Auto2_1 = require("./class-Auto2");
var class_LectorArchivo_1 = require("./class-LectorArchivo");
var ArchivoAuto = /** @class */ (function () {
    function ArchivoAuto(rutaArchivo) {
        this.lectorArchivo = new class_LectorArchivo_1["default"](rutaArchivo);
    }
    // private leerArchivo(rutaArchivo: string): string[] {
    //     let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    //     let lineas: string[] = archivo.split('\n');
    //     lineas = lineas.map(linea => linea.replace('\r', ''));
    //     return lineas;
    // }
    ArchivoAuto.prototype.getListaAutos = function () {
        var autos = this.lectorArchivo.leerArchivo();
        var arrAutos = new Array(autos.length);
        for (var index = 0; index < autos.length; index++) {
            var txtAuto = autos[index].split(",");
            var unAuto = new class_Auto2_1["default"](txtAuto[0], txtAuto[1], txtAuto[2], txtAuto[3], txtAuto[4]);
            arrAutos[index] = unAuto;
        }
        return arrAutos;
    };
    return ArchivoAuto;
}());
exports["default"] = ArchivoAuto;
