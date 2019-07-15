//import Auto from "./classAuto";

class Auto2 {
    private marca: string;
    private modelo: string;
    private combustible: string;
    private anio: string;
    private dominio: string;
    private velocidad: number;

    public constructor(marca?: string, modelo?: string, combustible?: string, anio?: string, dominio?: string) {
        if (marca == undefined) {
            this.marca = "S/D";
        } else {
            this.marca = marca;
        }
        if (modelo == undefined) {
            this.modelo = "S/D";
        } else {
            this.modelo = modelo;
        }
        if (combustible == undefined) {
            this.combustible = "S/D";
        } else {
            this.combustible = combustible;
        }
        if (anio == undefined) {
            this.anio = "S/D";
        } else {
            this.anio = anio;
        }
        if (dominio == undefined) {
            this.dominio = "S/D";
        } else {
            this.dominio = dominio;
        }
        this.velocidad = 0;
    }

    public equals(auto: Auto2): boolean {
        if (auto != null)
            return (this.marca == auto.getMarca() && this.modelo == auto.getModelo() &&
                this.combustible == auto.getCombustible() && this.anio == auto.getAnio() &&
                this.dominio == auto.getDominio());
        else
            return false;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setCombustible(combustible: string): void {
        this.combustible = combustible;
    }

    public getCombustible(): string {
        return this.combustible;
    }

    public setAnio(anio: string): void {
        this.anio = anio;
    }

    public getAnio(): string {
        return this.anio;
    }

    public setDominio(dominio: string): void {
        this.dominio = dominio;
    }

    public getDominio(): string {
        return this.dominio;
    }

    public acelerar(): void {
        if (this.velocidad <= 190)
            this.velocidad += 10;
        else
            console.log("velocidad máxima alcanzada");
    }

    public desacelerar(): void {
        if (this.velocidad > 0)
            this.velocidad -= 10;
        else
            console.log("velocidad mínima alcanzada");
    }

    public getVelocidad(): number {
        return this.velocidad;
    }
}

export default Auto2;

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