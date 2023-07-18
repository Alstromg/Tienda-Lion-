import { useContext } from "react";
import { context } from "./context";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carta, total, vaciar } = useContext(context);

  return (
    <div className="carrito">
      <h2>Tu Canasta de Productos</h2>
      <hr />
      {carta.map((producto) => (
        <div key={producto.id}>
          <h5>{producto.nombre}</h5>
          <img src={producto.img} alt={producto.nombre} />
          <p>Precio: {producto.precio}</p>
          <p>Unidades: {producto.cantidad}</p>
        </div>
      ))}
      <div>
        <h3>Total a pagar: $ {total()} </h3>
        <button onClick={vaciar} className="btn btn-primary ">
          Eliminar Productos
        </button>
        <Link className="btn btn-success my-20" to="/checkout">
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;