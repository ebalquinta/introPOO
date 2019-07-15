"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(on, velocidadActual, marchaActual) {
        this.on = on;
        if (velocidadActual > 0 && velocidadActual <= 200)
            this.velocidadActual = velocidadActual;
        else {
            console.log("velocidad inválida");
            this.velocidadActual = 0;
        }
        if (marchaActual >= 0 && marchaActual <= 5)
            this.marchaActual = marchaActual;
        else {
            console.log("marcha inválida");
            this.marchaActual = 0;
        }
    }
    Auto.prototype.isOn = function () {
        return this.on;
    };
    Auto.prototype.setOnOff = function () {
        if (this.on)
            this.on = false;
        else
            this.on = true;
    };
    Auto.prototype.subirVelocidad = function () {
        if (this.velocidadActual <= 200)
            this.velocidadActual++;
        else
            console.log("velocidad máxima alcanzada");
    };
    Auto.prototype.bajarVelocidad = function (velocidad) {
        if (this.velocidadActual >= 0)
            this.velocidadActual--;
        else
            console.log("velocidad mínima alcanzada");
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.subirMarcha = function () {
        if (this.marchaActual < 5)
            this.marchaActual++;
        else
            console.log("cambio de marcha inválido");
    };
    Auto.prototype.bajarMarcha = function () {
        if (this.marchaActual > 0)
            this.marchaActual--;
        else
            console.log("cambio de marcha inválido");
    };
    Auto.prototype.getMarchaActual = function () {
        return this.marchaActual;
    };
    return Auto;
}());
exports["default"] = Auto;
// let autoNuevo = new Auto(false, 0, 0);
// console.log(autoNuevo.getMarchaActual());
// autoNuevo.subirMarcha();
// autoNuevo.subirMarcha();
// console.log(autoNuevo.getMarchaActual());
