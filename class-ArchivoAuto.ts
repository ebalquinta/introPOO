import Auto from './class-Auto2';
import LectorArchivo from './class-LectorArchivo';

class ArchivoAuto {
    private lectorArchivo: LectorArchivo;

    constructor(rutaArchivo: string) {
        this.lectorArchivo = new LectorArchivo(rutaArchivo);
    }

    // private leerArchivo(rutaArchivo: string): string[] {
    //     let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
    //     let lineas: string[] = archivo.split('\n');
    //     lineas = lineas.map(linea => linea.replace('\r', ''));
    //     return lineas;
    // }

    public getListaAutos(): Auto[] {
        let autos: string[] = this.lectorArchivo.leerArchivo();
        let arrAutos: Auto[] = new Array(autos.length);
        for (let index: number = 0; index < autos.length; index++) {
            let txtAuto: string[] = autos[index].split(",");
            let unAuto: Auto = new Auto(txtAuto[0], txtAuto[1], txtAuto[2], txtAuto[3], txtAuto[4]);
            arrAutos[index] = unAuto;
        }
        return arrAutos;
    }
}

export default ArchivoAuto;