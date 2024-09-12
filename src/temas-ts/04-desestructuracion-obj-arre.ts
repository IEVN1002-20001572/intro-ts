interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:50,
    segundo:10,
    cancion:"valiente",
    detalles:{
        autor:"paty cantu",
        year:2018
    }
}

/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundo son: ${reproductor.segundo}`);
console.log(`El cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El ano es: ${reproductor.detalles.year}`);*/

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundo son: ${segundo}`);
console.log(`El cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El ano es: ${year}`);

const dbz:string[]=['Goku','Majinbu','Babidy','Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 1 ${dbz[1]}`);
console.log(`Personaje 1 ${dbz[2]}`);
console.log(`Personaje 1 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 1 ${b}`);