"use strict";
exports.__esModule = true;
var class_Auto2_1 = require("./class-Auto2");
var readlineSync = require("./node_modules/readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, listaAutos, direccion) {
        this.nombre = nombre;
        this.listaAutos = listaAutos;
        if (direccion == undefined) {
            this.direccion = "S/D";
        }
        else {
            this.direccion = direccion;
        }
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    RegistroAutomotor.prototype.getDireccion = function () {
        return this.direccion;
    };
    RegistroAutomotor.prototype.getListaAutos = function () {
        return this.listaAutos;
    };
    RegistroAutomotor.prototype.buscarAuto = function (dominio) {
        var result = -1;
        for (var index = 0; index < this.listaAutos.length; index++) {
            if (dominio == this.listaAutos[index].getDominio()) {
                result = index;
                break;
            }
        }
        return result;
    };
    RegistroAutomotor.prototype.consultarAuto = function (dominio) {
        var resultAuto = null;
        if (this.buscarAuto(dominio) != -1) {
            console.log("dominio:", dominio, "encontrado: ");
            resultAuto = this.listaAutos[this.buscarAuto(dominio)];
        }
        else
            console.log("dominio:", dominio, "no encontrado");
        return resultAuto;
    };
    RegistroAutomotor.prototype.borrarAuto = function (dominio) {
        if (this.buscarAuto(dominio) != -1) {
            var index = this.buscarAuto(dominio);
            this.listaAutos.splice(index, 1);
            console.log("dominio:", dominio, "eliminado");
        }
        else {
            console.log("dominio:", dominio, "no encontrado");
        }
    };
    RegistroAutomotor.prototype.updateLine = function (txt, infoAuto) {
        var entradaTxt = readlineSync.question(txt);
        if ((entradaTxt == '') || (entradaTxt == ' ') || (entradaTxt == infoAuto))
            return infoAuto;
        else
            return entradaTxt;
    };
    RegistroAutomotor.prototype.update = function (auto) {
        var updateAuto = new class_Auto2_1["default"]();
        updateAuto.setMarca(this.updateLine("ingrese nueva marca: ", auto.getMarca()));
        updateAuto.setModelo(this.updateLine("ingrese nuevo modelo: ", auto.getModelo()));
        updateAuto.setCombustible(this.updateLine("ingrese nuevo combustible: ", auto.getCombustible()));
        updateAuto.setAnio(this.updateLine("ingrese nuevo anio: ", auto.getAnio()));
        updateAuto.setDominio(this.updateLine("ingrese nuevo dominio: ", auto.getDominio()));
        return updateAuto;
    };
    RegistroAutomotor.prototype.actualizarAuto = function (dominio) {
        if (this.buscarAuto(dominio) != -1) {
            console.log("dominio ", dominio, " encontrado:");
            var index = this.buscarAuto(dominio);
            var resultAuto = this.listaAutos[index];
            this.listaAutos[index] = this.update(resultAuto);
            console.log("dominio:", dominio, "actualizado");
        }
        else {
            console.log("dominio:", dominio, "no encontrado");
        }
    };
    RegistroAutomotor.prototype.ingresarAuto = function (auto) {
        if (this.consultarAuto(auto.getDominio()) != null) {
            console.log("auto duplicado, no añadido");
            return false;
        }
        else {
            this.listaAutos.push(auto);
            console.log("auto nuevo añadido");
            return true;
        }
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
