class Monitor {
    private on: boolean;
    private brillo: string;
    private contraste: string;

    constructor(on: boolean, brillo?: string, contraste?: string) {
        this.on = on;
        if (brillo == undefined) {
            this.brillo = "50";
        } else
            if (parseInt(brillo) > 0 && parseInt(brillo) <= 100) {
                this.brillo = brillo;
            } else {
                console.log("brillo inválido");
            }
        if (contraste == undefined) {
            this.contraste = "50";
        } else
            if (parseInt(contraste) > 0 && parseInt(contraste) <= 100) {
                this.contraste = contraste;
            } else {
                console.log("contraste inválido");
            }
    }

    public setOnOff(): void {
        if (this.on) this.on = false;
        else this.on = true;
    }

    public isOn(): boolean {
        return this.on;
    }

    public subirBrillo(): void {
        if (parseInt(this.brillo) < 100) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.brillo = (parseInt(this.brillo)+1).toString(); //brillo.toString();
        } else {
            console.log("brillo máximo alcanzado");
        }
    }

    public bajarBrillo(): void {
        if (parseInt(this.brillo) > 0) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.brillo = (parseInt(this.brillo)-1).toString(); //brillo.toString();
        } else {
            console.log("brillo mínimo alcanzado");
        }
    }

    public subirContraste(): void {
        if (parseInt(this.contraste) < 100) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.contraste = (parseInt(this.contraste)+1).toString(); //brillo.toString();
        } else {
            console.log("contraste máximo alcanzado");
        }
    }

    public bajarContraste(): void {
        if (parseInt(this.contraste) > 0) {
            // let brillo: number = parseInt(this.brillo)+1;
            this.contraste = (parseInt(this.contraste)-1).toString(); //brillo.toString();
        } else {
            console.log("contraste mínimo alcanzado");
        }
    }
}

export default Monitor;