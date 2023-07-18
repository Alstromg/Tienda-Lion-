
import { createContext, useContext, useState } from "react";


export const context = createContext()
export const useContextC = () => useContext(context)

const CartContext = ({children}) => {
    const[carta, setCarta] = useState([])
  const agregarC = (item) => {
    setCarta([...carta, item ])
  }
  const itemR = (id) => {
    return carta.some((producto) => producto.id === id)
  }
  const total =() =>{
    return carta.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0
    )
  }
  const vaciar = () =>{
    setCarta([])
  }
    return (
        <context.Provider value={{carta, 
        agregarC, 
        itemR,
        total,
        vaciar
        }}>

            {children}
        </context.Provider>

    )
}
export {CartContext};

