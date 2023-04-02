import { Link } from "react-router-dom";
import "./index.css";

const TerapiasManuales = ({ terapias }) => {

    const terapiasManuales = terapias.filter((terapias) => terapias.categoría === "terapia manual");

    
    return (
        <div >
            {terapiasManuales.map((producto) => (
                <Link to={`${producto.id}`} key={producto.id} className="tmcard">
                <div key={producto.id} className="fcontenido">
                    <h3>{producto.producto}</h3>
                    <img src={producto.imagen} alt='' />
                    <button >Ver descripcion</button>
                    
                </div>
                </Link>
            ))}
        </div>
    )
}

export default TerapiasManuales