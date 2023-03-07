import { Link } from "react-router-dom"
import "./tarjeta.css"
const Figura = ({ terapias }) => {
  return (
    <Link to={`${terapias.id}`} className="ltarjeta">
      <div className="fcontenido">
        <h3>{terapias.title}</h3>
        <img src={terapias.image} alt='' />

      </div>
    </Link>
  )
}

export default Figura;