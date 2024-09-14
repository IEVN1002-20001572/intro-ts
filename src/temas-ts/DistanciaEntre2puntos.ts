
export class Punto {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    imprimir(): void {
        console.log(`Punto: (${this.x}, ${this.y})`);
    }
}

export class Distancia extends Punto {
    protected x2: number;
    protected y2: number;

    constructor(x: number, y: number, x2: number, y2: number) {
        super(x, y);
        this.x2 = x2;
        this.y2 = y2;
    }

    calcularDistancia(): void {
        const distancia = Math.sqrt(Math.pow(this.x2 - this.x, 2) + Math.pow(this.y2 - this.y, 2));
        console.log(`La distancia entre los puntos (${this.x}, ${this.y}) y (${this.x2}, ${this.y2}) es: ${distancia}`);
    }

    imprimir(): void {
        console.log(`Punto 1: (${this.x}, ${this.y}) Punto 2: (${this.x2}, ${this.y2})`);
    }
}


const punto1 = new Punto(3, 4);
punto1.imprimir();

const distancia1 = new Distancia(3, 4, 7, 1);
distancia1.imprimir();
distancia1.calcularDistancia();
