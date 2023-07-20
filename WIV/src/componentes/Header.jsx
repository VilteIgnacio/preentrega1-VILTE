import { CartWidget } from "./cartWidget"
export const Header = () => {
    return (
    <div>
        <h1 className="h1">Wiv-Store</h1>
        <nav>
            <a href="#">Inicio</a>
            <a href="">Stock</a>
            <a href="">Promociones</a>
            <a href="">Contacto</a>
        </nav>
        <cartWidget/>
    </div>
)}