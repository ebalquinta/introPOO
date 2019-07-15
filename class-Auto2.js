"use strict";
//import Auto from "./classAuto";
exports.__esModule = true;
var Auto2 = /** @class */ (function () {
    function Auto2(marca, modelo, combustible, anio, dominio) {
        if (marca == undefined) {
            this.marca = "S/D";
        }
        else {
            this.marca = marca;
        }
        if (modelo == undefined) {
            this.modelo = "S/D";
        }
        else {
            this.modelo = modelo;
        }
        if (combustible == undefined) {
            this.combustible = "S/D";
        }
        else {
            this.combustible = combustible;
        }
        if (anio == undefined) {
            this.anio = "S/D";
        }
        else {
            this.anio = anio;
        }
        if (dominio == undefined) {
            this.dominio = "S/D";
        }
        else {
            this.dominio = dominio;
        }
        this.velocidad = 0;
    }
    Auto2.prototype.equals = function (auto) {
        if (auto != null)
            return (this.marca == auto.getMarca() && this.modelo == auto.getModelo() &&
                this.combustible == auto.getCombustible() && this.anio == auto.getAnio() &&
                this.dominio == auto.getDominio());
        else
            return false;
    };
    Auto2.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto2.prototype.getMarca = function () {
        return this.marca;
    };
    Auto2.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto2.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto2.prototype.setCombustible = function (combustible) {
        this.combustible = combustible;
    };
    Auto2.prototype.getCombustible = function () {
        return this.combustible;
    };
    Auto2.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Auto2.prototype.getAnio = function () {
        return this.anio;
    };
    Auto2.prototype.setDominio = function (dominio) {
        this.dominio = dominio;
    };
    Auto2.prototype.getDominio = function () {
        return this.dominio;
    };
    Auto2.prototype.acelerar = function () {
        if (this.velocidad <= 190)
            this.velocidad += 10;
        else
            console.log("velocidad máxima alcanzada");
    };
    Auto2.prototype.desacelerar = function () {
        if (this.velocidad > 0)
            this.velocidad -= 10;
        else
            console.log("velocidad mínima alcanzada");
    };
    Auto2.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Auto2;
}());
exports["default"] = Auto2;
// let auto = new Auto(true, 0, 0);
// let miAuto = new Auto2("Fiat");
// let miAuto2 = new Auto2("Fiat", "Uno");
// console.log("Antes de acelerar:");
// console.log("Auto sin modelo: ", miAuto, "\n");
// console.log("Auto con modelo: ", miAuto2, "\n");
// miAuto.acelerar();
// miAuto.setAnio("2001");
// miAuto2.acelerar();
// miAuto2.desacelerar();
// miAuto2.desacelerar();
// auto.subirVelocidad();
// console.log("Después de acelerar:");
// console.log("Auto sin modelo: ", miAuto, "\n");
// console.log("Auto con modelo: ", miAuto2, "\n");
// console.log("auto de otra clase", auto);
