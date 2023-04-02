import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import Brief from "../Brief/brief";
import { CartContext } from "../../context/context";
import { db } from "../../firebase/firebase";


const Cart = () => {
  const { cart, removeItem, TotalPrice, clear } = useContext(CartContext);
  const [sellId, setSellId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBrief, setShowBrief] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = () => {
    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      datos: userData,
      items: cart,
      total: TotalPrice(),
      time: serverTimestamp(),
    }).then((result) => {
      const resultID = result.id;
      setSellId(resultID);
      handlerStock();
      setIsSubmitted(true);
    });
  };

  const handlerStock = () => {
    cart.forEach((prod) => {
      const referenceStock = doc(db, "products", prod.id);
      const newStock = prod.unidades - prod.quantity;
      updateDoc(referenceStock, {
        unidades: newStock,
      });
    });
  };

  const handleConfirm = (data) => {
    setUserData(data);
  };

  const handleFinalizarCompra = () => {
    handleSubmit();
    setShowBrief(true);
  };
  
 

  return (
    <>
      {cart.length === 0 ? (
        <p className="sinProductos">
          {" "}
          No hay terapias en el carrito. Elija sus terapias
          <Link to="/terapias" className="aca">
            presionando aquí.
          </Link>
        </p>
      ) : (
        <>
          {!isSubmitted && (
            <>
              <div className="formatoCarrito">
                {cart.map((prod) => {
                  return (
                    <div key={prod.id} className="productos">
                       {prod.producto}
                        ${prod.precio}
                        <img src={prod.imagen} alt='' />
                        cantidad: {prod.cantidad}
                        
                      <span
                        className="boton-eliminar"
                        onClick={() => removeItem(prod.id)}
                      >
                        <button> x </button>
                      </span>
                    </div>
                  );
                })}
                <p> Precio total: ${TotalPrice()} </p>
                <button onClick={clear} className="limpiar-carrito"> Limpiar carrito </button>
              </div>
              
              <button
                onClick={handleFinalizarCompra}
                className="finalizar-compra"
              >
                Finalizar compra
              </button>
            </>
          )}
          {isSubmitted && showBrief && (
            <Brief dataShop={cart} dataPrice={TotalPrice()} id={sellId} />
          )}
        </>
      )}
    </>
  );
};

export default Cart;
