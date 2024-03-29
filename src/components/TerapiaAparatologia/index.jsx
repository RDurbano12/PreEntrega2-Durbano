import { Link } from "react-router-dom";
import "./index.css"
const TerapiaAparatologia = ({ terapias }) => {

    const terapiaConAparatos = terapias.filter((terapia) => terapia.categoría === "aparatologia");
    
    return (
        <div >
            {terapiaConAparatos.map((terapia) => (
                <Link to={`${terapia.id}`} key={terapia.id} className="tpcard">
                    <div className="fcontenido">
                        <h3>{terapia.producto}</h3>
                        <img src={terapia.imagen} alt='' />
                        <button >Ver descripcion</button>
                        
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default TerapiaAparatologia