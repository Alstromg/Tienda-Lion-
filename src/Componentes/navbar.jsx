
import { Link } from "react-router-dom";

 const Navbar = () =>{

    return ( 
        <header className="navbar">
            <div className="imagenLogo">
            <img src="./src/img/logo.png" alt="" />
            </div>
            <div className="navegacion">
                <nav>
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/productos/pesas">Pesas</Link>
                    <Link to="/productos/atletismo">Runner</Link>
                    <Link to="/productos/hogar">Hogar</Link>
                    <Link to="/productos/libre">Aire libre</Link>
                    <Link to="/conocer">Conozcanos</Link>
                    
                    <Link to="/carrito"><img height="100px"src="./src/img/carrito.png" alt="Carrito"></img>  </Link>
                </nav>   
            </div>
        </header>
    )
}
export default Navbar;
