
export const Incrementador = ({max, cantidad, setCantidad, agregarCar}) => {

const handleIncrement = () => {
  cantidad < max && setCantidad(cantidad + 1);
};

const handleDecrement = () => {
  if (cantidad > 1) {
    setCantidad(cantidad - 1);
  }
};
const handleAgregarCar = () => {
  agregarCar();
};

return(
    <div className="botonesSuma">
      <button onClick={handleDecrement} className="btn btn-primary">-</button>
      <span>{cantidad}</span>
      <button onClick={handleIncrement} className="btn btn-primary">+</button>
      <br></br>
      <br></br>
      <button onClick={handleAgregarCar} className="btn btn-danger">Comprar</button>
    </div>
)
}