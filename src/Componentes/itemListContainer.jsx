import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config'


export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [productosAMostrar, setProductosAMostrar] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const productos = [];
  
        querySnapshot.forEach((doc) => {
          const producto = { id: doc.id, ...doc.data() };
  
          if (categoria && producto.categoria === categoria) {
            productos.push(producto);
          } else if (!categoria) {
            productos.push(producto);
          }
        });
  
        setProductosAMostrar(productos);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
  
    obtenerProductos();
  }, [categoria]);

  return (
    <div className="Itemcontainer">
      <h2>Productos</h2>
      <div className="contenedorCard">
        {productosAMostrar.map((producto) => (
          <div className="card" style={{ width: "300px", height: "500px"}} key={producto.id}>
            <div style={{ maxWidth: "100%" }}>
              <img
                src={producto.img}
                className="card-img-top"
                alt=""
                style={{ width: "100%", height: "300px" }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text"> Precio: {producto.precio}</p>
              <p className="card-text"> Cantidad: {producto.cantidad}</p>
              <Link to={`/productos/${categoria}/${producto.id}`}><button className="btn btn-danger">Ver mas</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
