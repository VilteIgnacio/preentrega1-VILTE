import { Clicker } from './componentes/Clicker'
import { Tutores } from './componentes/Tutores'
import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/itemListContainer'
import  {Contenedor}  from './componentes/contenedor'
import { MiBoton } from './componentes/MiBoton'
 /* import bienvenida from './ejemplos/saludos' */ //forma default de IMPORTAR
/* import { bienvenida , despedida } from './ejemplos/saludos'  */// forma especifica de IMPORTAR
// Si quiero cambiarle el nombre = import {bienvenida as saludo}// as

const saludar = () => {
  console.log("hola");
}

function App() {
/* bienvenida()
despedida() */


  return (
    <div>{/* {  <Tutores/>} */}
{/* <Clicker/> */}

<Header/>
<ItemListContainer/>

<Contenedor>
  <Tutores/>
  <MiBoton color="red" click={saludar}>
click me <img src="./vite.svg" alt="" />
  </MiBoton>
</Contenedor>










    </div>
  )
}

export default App
