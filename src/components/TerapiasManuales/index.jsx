import { Link } from "react-router-dom";
import "./index.css";

const TerapiasManuales = ({ terapias }) => {

    const terapiasManuales = terapias.filter((terapias) => terapias.category === "men's clothing");

    
    return (
        <div >
            {terapiasManuales.map((producto) => (
                <Link to={`${producto.id}`} key={producto.id} className="tmcard">
                <div key={producto.id} className="fcontenido">
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt='' />
                    
                </div>
                </Link>
            ))}
        </div>
    )
}

export default TerapiasManuales