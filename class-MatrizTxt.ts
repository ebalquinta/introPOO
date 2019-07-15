import LectorArchivo from './class-LectorArchivo';

class MatrizTxt {
    private filas: number;
    private columnas: number;
    private lectorArchivo: LectorArchivo;
    private matriz: string[][];

    constructor(rutaArchivo: string) {
        this.lectorArchivo = new LectorArchivo(rutaArchivo);
        this.matriz = this.cargarMatriz(this.lectorArchivo.leerArchivo());
        this.filas = this.matriz.length;
        this.columnas = this.matriz[0].length;
    }

    private inicializarMatriz(arr: string[]): string[][] {
        let matriz: string[][] = new Array(arr.length);
        let maxCol: number = arr[0].split(",").length;
        for (let i: number = 0; i < arr.length; i++) {
            matriz[i] = new Array(maxCol);
        }
        return matriz;
    }

    private cargarMatriz(arrText: string[]): string[][] {
        let matrix: string[][] = this.inicializarMatriz(arrText);
        for (let indiceFila: number = 0; indiceFila < arrText.length; indiceFila++) {
            let fila: string[] = arrText[indiceFila].split(",");
            for (let indiceColumna: number = 0; indiceColumna < arrText[indiceFila].split(",").length; indiceColumna++) {
                matrix[indiceFila][indiceColumna] = fila[indiceColumna];
            }
        }
        return matrix;
    }

    public get(x: number, y: number): string {
        if (0 <= x-1 && x-1 < this.filas && 0 <= y-1 && y-1 < this.columnas)
            return this.matriz[x-1][y-1];
        else
            return "coordenadas fuera de rango";
    }
}

export default MatrizTxt;