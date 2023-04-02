import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/context";
import "./tarjeta.css"


const Figura = ({ terapias}) => {


  return (
    <Link to={`${terapias.id}`} className="ltarjeta">
      <div className="fcontenido">
        <h3>{terapias.producto}</h3>
        <img src={terapias.imagen} alt='' />
       
         
    

      </div>
    </Link>
  )
}

export default Figura;
