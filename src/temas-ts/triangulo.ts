import { Punto, x1, y1, x2, y2 } from './DistanciaEntre2puntos'; 

class VerificarTriangulo extends Punto { 
    private x3: number;
    private y3: number;

    constructor(x: number, y: number, x2: number, y2: number, x3: number, y3: number) {
        super(x, y, x2, y2);  
        this.x3 = x3;
        this.y3 = y3;
    }

    calcularDistanciaEntrePuntos(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    esTriangulo(): void {
        const distancia1 = this.calcularDistanciaEntrePuntos(this.x1, this.y1, this.x2, this.y2);
        const distancia2 = this.calcularDistanciaEntrePuntos(this.x2, this.y2, this.x3, this.y3);
        const distancia3 = this.calcularDistanciaEntrePuntos(this.x1, this.y1, this.x3, this.y3);

        console.log(`Distancia entre Punto A (${this.x1}, ${this.y1}) y Punto B (${this.x2}, ${this.y2}): ${distancia1}`);
        console.log(`Distancia entre Punto B (${this.x2}, ${this.y2}) y Punto C (${this.x3}, ${this.y3}): ${distancia2}`);
        console.log(`Distancia entre Punto A (${this.x1}, ${this.y1}) y Punto C (${this.x3}, ${this.y3}): ${distancia3}`);

        if (distancia1 + distancia2 > distancia3 && distancia2 + distancia3 > distancia1 && distancia1 + distancia3 > distancia2) {
            console.log('Es un triángulo!!!');
        } else {
            console.log('No es un triángulo :c');
        }
    }

    imprimirPuntos(): void {
        console.log(`Punto 1: (${this.x1}, ${this.y1})`);
        console.log(`Punto 2: (${this.x2}, ${this.y2})`);
        console.log(`Punto 3: (${this.x3}, ${this.y3})`);
    }
}


const x3 = 3;
const y3 = 4;

const verificarTriangulo = new VerificarTriangulo(x1, y1, x2, y2, x3, y3);
verificarTriangulo.imprimirPuntos();
verificarTriangulo.esTriangulo();
