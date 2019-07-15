import Auto from "./class-Auto2";
import * as readlineSync from './node_modules/readline-sync';

class RegistroAutomotor {
    private nombre: string;
    private direccion: string;
    private listaAutos: Auto[];

    constructor(nombre: string, listaAutos: Auto[], direccion?: string) {
        this.nombre = nombre;
        this.listaAutos = listaAutos;
        if (direccion == undefined) {
            this.direccion = "S/D";
        } else {
            this.direccion = direccion;
        }
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public getListaAutos(): Auto[] {
        return this.listaAutos;
    }

    private buscarAuto(dominio: string): number {
        let result: number = -1;
        for (let index: number = 0; index < this.listaAutos.length; index++) {
            if (dominio == this.listaAutos[index].getDominio()) {
                result = index;
                break;
            }
        }
        return result;
    }

    public consultarAuto(dominio: string): Auto {
        let resultAuto: Auto = null;
        if (this.buscarAuto(dominio) != -1) {
            console.log("dominio:", dominio, "encontrado: ");
            resultAuto = this.listaAutos[this.buscarAuto(dominio)];
        } else
            console.log("dominio:", dominio, "no encontrado");
        return resultAuto;
    }

    public borrarAuto(dominio: string): void {
        if (this.buscarAuto(dominio) != -1) {
            let index: number = this.buscarAuto(dominio);
            this.listaAutos.splice(index, 1);
            console.log("dominio:", dominio, "eliminado");
        } else {
            console.log("dominio:", dominio, "no encontrado");
        }
    }

    private updateLine(txt: string, infoAuto: string): string {
        let entradaTxt: string = readlineSync.question(txt);
        if ((entradaTxt == '') || (entradaTxt == ' ') || (entradaTxt == infoAuto))
            return infoAuto;
        else return entradaTxt;
    }

    private update(auto: Auto): Auto {
        let updateAuto: Auto = new Auto();
        updateAuto.setMarca(this.updateLine("ingrese nueva marca: ", auto.getMarca()));
        updateAuto.setModelo(this.updateLine("ingrese nuevo modelo: ", auto.getModelo()));
        updateAuto.setCombustible(this.updateLine("ingrese nuevo combustible: ", auto.getCombustible()));
        updateAuto.setAnio(this.updateLine("ingrese nuevo anio: ", auto.getAnio()));
        updateAuto.setDominio(this.updateLine("ingrese nuevo dominio: ", auto.getDominio()));
        return updateAuto;
    }

    public actualizarAuto(dominio: string): void {
        if (this.buscarAuto(dominio) != -1) {
            console.log("dominio ", dominio, " encontrado:");
            let index = this.buscarAuto(dominio);
            let resultAuto: Auto = this.listaAutos[index];
            this.listaAutos[index] = this.update(resultAuto);
            console.log("dominio:", dominio, "actualizado");
        } else {
            console.log("dominio:", dominio, "no encontrado");
        }
    }

    public ingresarAuto(auto: Auto): boolean {
        if (this.consultarAuto(auto.getDominio()) != null) {
            console.log("auto duplicado, no añadido");
            return false;
        } else {
            this.listaAutos.push(auto);
            console.log("auto nuevo añadido");
            return true;
        }
    }
}

export default RegistroAutomotor;