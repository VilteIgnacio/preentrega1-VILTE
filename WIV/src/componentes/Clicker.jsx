import { useState } from "react";
export const Clicker = () => {
const [counter , setCounter] = useState(0) //ESTADO de react
//El primer parametro es un estado, y el segundo es para actualizar la informacion de ese estado
//y para avisarle a react que hay que renderizar el componente
    /* let counter = 0; */
const [saludo , setSaludo] = useState(true)

console.log(saludo);

const estado = useState()
console.log(estado);

    const clickear = () => {
    setCounter(counter + 1)
    }

const cambiarSaludo = () => {
/* setSaludo(saludo === true ? false : true) */
setSaludo(!saludo)
}

return (
        <div>
            <h2>Clicker</h2>
            <hr />
            <button onClick={clickear} >Click me</button>
            <p>Clicks : {counter} </p>
            <hr />
            <button onClick={cambiarSaludo} >saludar</button>
            <p className={saludo ? "hola" : "chau"} > { saludo ? "hola mundo" : "chau mundo" } </p>
        
        </div>
    )
}