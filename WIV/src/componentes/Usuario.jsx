//               propiedades nivel 1
/* export const Usuario = (props) => { //este parametro es siempre un objeto ,la info se define en el componente donde se esta renderizando
    console.log(props);

    return (
    <div>
<h3>{props.nombre}</h3>
<p>edad : {props.edad} </p>
<p>rol : {props.rol}</p>
        </div>
    )
}
 */
//                 propiedades nivel 2
/* export const Usuario = (props) => { 
    const { nombre, edad, rol} = props // desetructuracion de objetos para sintaccis mejorada

    return (
    <div>
<h3>{nombre}</h3>
<p>rol : {rol}</p>
<p>edad : {edad} </p>
        </div>
    )} */

//                propiedades nivel 3 (es la mas usada)

    export const Usuario = ( {nombre, edad, rol} ) => { 
        
        return (
        <ul>
    <h3>{nombre}</h3>
    <li><p>rol : {rol}</p></li>
    <li><p>edad : {edad} </p></li>
            </ul>
        )}