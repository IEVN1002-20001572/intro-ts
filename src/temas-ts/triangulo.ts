
import { Distancia } from './DistanciaEntre2puntos'; 

class VerificarTriangulo extends Distancia {
    private x3: number;
    private y3: number;

    constructor(x: number, y: number, x2: number, y2: number, x3: number, y3: number) {
        super(x, y, x2, y2); 
        this.x3 = x3;
        this.y3 = y3;
    }

    esTriangulo(): void {
        
        const area = Math.abs(this.x * (this.y2 - this.y3) + this.x2 * (this.y3 - this.y) + this.x3 * (this.y - this.y2)) / 2;

        if (area > 0) {
            console.log('Es un triangulo!!!');
        } else {
            console.log('No es un triangulo :c');
        }
    }

    imprimirPuntos(): void {
        console.log(`Punto 1: (${this.x}, ${this.y})`);
        console.log(`Punto 2: (${this.x2}, ${this.y2})`);
        console.log(`Punto 3: (${this.x3}, ${this.y3})`);
    }
}


const x3 = Math.floor(Math.random() * 10);
const y3 = Math.floor(Math.random() * 10);

const verificarTriangulo = new VerificarTriangulo(3, 4, 7, 1, x3, y3); 
verificarTriangulo.imprimirPuntos();
verificarTriangulo.esTriangulo();
