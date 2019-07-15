class Auto {
    private on: boolean;
    private velocidadActual: number;
    private marchaActual: number;

    public constructor(on: boolean, velocidadActual: number, marchaActual: number) {
        this.on = on;
        if (velocidadActual > 0 && velocidadActual <= 200) this.velocidadActual = velocidadActual;
        else {
            console.log("velocidad inválida");
            this.velocidadActual = 0;
        }
        if (marchaActual >= 0 && marchaActual <= 5) this.marchaActual = marchaActual;
        else {
            console.log("marcha inválida");
            this.marchaActual = 0;
        }
    }

    public isOn(): boolean {
        return this.on;
    }

    public setOnOff(): void {
        if (this.on) this.on = false;
        else this.on = true;
    }

    public subirVelocidad(): void {
        if (this.velocidadActual <= 200) this.velocidadActual++;
        else console.log("velocidad máxima alcanzada");
    }

    public bajarVelocidad(velocidad: number): void {
        if (this.velocidadActual >= 0) this.velocidadActual--;
        else console.log("velocidad mínima alcanzada");
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    subirMarcha() {
        if (this.marchaActual < 5) this.marchaActual++;
        else console.log("cambio de marcha inválido");
    }

    bajarMarcha() {
        if (this.marchaActual > 0) this.marchaActual--;
        else console.log("cambio de marcha inválido");
    }

    getMarchaActual(): number {
        return this.marchaActual;
    }
}

export default Auto;

// let autoNuevo = new Auto(false, 0, 0);
// console.log(autoNuevo.getMarchaActual());
// autoNuevo.subirMarcha();
// autoNuevo.subirMarcha();
// console.log(autoNuevo.getMarchaActual());
