import React from "react";
 import "./brief.css";

const Brief = ({ dataShop, dataPrice, id }) => {
  return (
    <div className="brief">
      <h1>Tu compra fue realizada con éxito!</h1>
      <div>
        <u>Los detalles de tu compra son:</u>
        <div>
          {dataShop.map((item) => (
            <p key={item.id}>
              {item.producto}    
            </p>
          ))}
        </div>
        <p>Total: ${dataPrice}</p>
        <p>ID de compra: {id}</p>
      </div>
    </div>
    
  );
};

export default Brief;