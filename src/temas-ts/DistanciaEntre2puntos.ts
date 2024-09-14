export class Punto {
    protected x1: number;
    protected y1: number;
    protected x2: number;
    protected y2: number;

    constructor(x: number, y: number, x2: number, y2: number) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = x2;
        this.y2 = y2;
    }
    calcularDistancia(): void {
        const distancia = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        console.log(`La distancia entre los puntos (${this.x1}, ${this.y1}) y (${this.x2}, ${this.y2}) es: ${distancia}`);
    }

 
    imprimir(): void {
        console.log(`Punto 1: (${this.x1}, ${this.y1}) Punto 2: (${this.x2}, ${this.y2})`);
    }
}

const x1 = 2;
const y1 = 9;
const x2 = 3;
const y2 = 5;

const punto1 = new Punto(x1, y1, x2, y2);
punto1.imprimir();
punto1.calcularDistancia(); 

export { x1, y1, x2, y2 };
