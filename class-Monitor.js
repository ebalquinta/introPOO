"use strict";
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor(on, brillo, contraste) {
        this.on = on;
        if (brillo == undefined) {
            this.brillo = "50";
        }
        else if (parseInt(brillo) > 0 && parseInt(brillo) <= 100) {
            this.brillo = brillo;
        }
        else {
            console.log("brillo inválido");
        }
        if (contraste == undefined) {
            this.contraste = "50";
        }
        else if (parseInt(contraste) > 0 && parseInt(contraste) <= 100) {
            this.contraste = contraste;
        }
        else {
            console.log("contraste inválido");
        }
    }
    Monitor.prototype.setOnOff = function () {
        if (this.on)
            this.on = false;
        else
            this.on = true;
    };
    Monitor.prototype.isOn = function () {
        return this.on;
    };
    Monitor.prototype.subirBrillo = function () {
        if (parseInt(this.brillo) < 100) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.brillo = (parseInt(this.brillo) + 1).toString(); //brillo.toString();
        }
        else {
            console.log("brillo máximo alcanzado");
        }
    };
    Monitor.prototype.bajarBrillo = function () {
        if (parseInt(this.brillo) > 0) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.brillo = (parseInt(this.brillo) - 1).toString(); //brillo.toString();
        }
        else {
            console.log("brillo mínimo alcanzado");
        }
    };
    Monitor.prototype.subirContraste = function () {
        if (parseInt(this.contraste) < 100) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.contraste = (parseInt(this.contraste) + 1).toString(); //brillo.toString();
        }
        else {
            console.log("contraste máximo alcanzado");
        }
    };
    Monitor.prototype.bajarContraste = function () {
        if (parseInt(this.contraste) > 0) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.contraste = (parseInt(this.contraste) - 1).toString(); //brillo.toString();
        }
        else {
            console.log("contraste mínimo alcanzado");
        }
    };
    return Monitor;
}());
exports["default"] = Monitor;
