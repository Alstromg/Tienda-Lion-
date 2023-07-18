import React, { useState } from "react";
import { useContextC } from "./context";
import { Link, Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import {db } from "../firebase/config"
export const Checkout = () => {
  const { carta, total, vaciar } = useContextC();
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
    telefono: ""
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const orden = {
      cliente: values,
      item: carta,
      total: total(),
      fecha: new Date()
    };
    const ordersRef = collection(db, "ordernes");
addDoc(ordersRef, orden)
  .then((doc) => {
    const orderId = doc.id;
    console.log(orderId);
    setValues({
      nombre: "",
      direccion: "",
      email: "",
      telefono: ""
    });
    vaciar();
    alert(`Su pedido ha sido correctamente guardado bajo el ID de orden: ${orderId}`);
  });

  };
  if (carta.length === 0 ){
    return <Navigate to="/Inicio" />
  }
  return (
    <div>
        <div>
        <h2>Finaliza tu compra</h2>
      <p>Estos productos ya casi son tuyos</p>
      <strong>
        <p>Total a pagar:</p>
      </strong>
      <h5>${total()}</h5>
      <br />
        <form onSubmit={handleSubmit}>
          <input
            name="nombre"
            value={values.nombre}
            type="text"
            placeholder="Nombre"
            onChange={handleInputChange}
            className="form-control my-2"
            required
          />
          <input
            name="direccion"
            value={values.direccion}
            type="text"
            placeholder="Direccion"
            onChange={handleInputChange}
            className="form-control my-2"
            required
          />
          <input
            name="email"
            value={values.email}
            type="text"
            placeholder="Email"
            onChange={handleInputChange}
            className="form-control my-2"
            required
          />
          <input
            name="telefono"
            value={values.telefono}
            type="number"
            placeholder="Telefono"
            onChange={handleInputChange}
            className="form-control my-2"
            required
          />
          <button className="btn btn-danger">Pagar</button>
        </form>
        </div>
    </div>
  );
};


