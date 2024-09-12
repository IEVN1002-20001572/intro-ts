import './style.css'
//import './temas-ts/01-tipos-bas.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './temas-ts/02-interfaz-arre.ts'
//import './temas-ts/03-funciones.ts'
import './temas-ts/05-desestructura-funciones.ts'


export function calcularIVA2(productos:Producto[]):[number,number]{
  let total=0;
  productos.forEach(({precio})=>{
    total+=precio
  });
  return [total,total*0.16]
}

const articulo2=[telefono, tablet];
const [total,iva2]=calcularIVA2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva2}`);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
