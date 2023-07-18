import { useEffect, useState, useContext } from "react"
import {db} from "../firebase/config"
import { Link, useParams } from "react-router-dom";
import { Incrementador } from "./Incrementador";
import { context } from "./context";
import { collection, getDocs } from 'firebase/firestore';


export const DesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        querySnapshot.forEach((doc) => {

          const producto = { id: doc.id, ...doc.data() };
      
          if (producto.id === id) {
            setProducto(producto);
          }
        });
  
        console.log("No se encontró el producto");
      } catch (error) {
        console.log("Error al obtener el producto:", error);
      }
    };
  
    obtenerProducto();
  }, [id]);
const [cantidad, setCantidad,] = useState(1)

const {agregarC, itemR} = useContext(context)
  const agregarCar =() => {
    const item = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        descripccion: producto.descripcion,
        img: producto.img,
        stock: producto.stock,
        cantidad: cantidad,
      };
      agregarC(item);
  }
  return (
    <div className="ItemcontainerDes">
      {producto && (
        <>
          <div className="contenedorCardDes">
            <div className="cardDes" style={{ width: "400px" }} key={producto.id}>
              <div style={{ maxWidth: "100%" }} >
              <h2>{producto.nombre}</h2>
                <img
                  src={producto.img}
                  className="card-img-top"
                  alt=""
                  style={{ width: "100%", height: "300px" }}
                />
              </div>
            </div>
            <div className="card-body">
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Cantidad: {producto.cantidad}</p>
                <p className="card-text">Descripción: {producto.descripcion}</p>
                {
                  itemR(producto.id)
                  ? <div><Link className="btn btn-danger" to="/productos">Seguir comprando</Link>
                  <Link className="btn btn-primary" to="/carrito">finalizar compra</Link></div>
                  : <Incrementador 
                  max={producto.stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  agregarCar={agregarCar}/>
                }
              </div>
          </div>
        </>
      )}
    </div>
  );
};
