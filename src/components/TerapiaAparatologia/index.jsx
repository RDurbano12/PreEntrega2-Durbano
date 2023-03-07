import { Link } from "react-router-dom";
import "./index.css"
const TerapiaAparatologia = ({ terapias }) => {

    const terapiaConAparatos = terapias.filter((terapia) => terapia.category === "women's clothing");
    
    return (
        <div >
            {terapiaConAparatos.map((terapia) => (
                <Link to={`${terapia.id}`} key={terapia.id} className="tpcard">
                    <div className="fcontenido">
                        <h3>{terapia.title}</h3>
                        <img src={terapia.image} alt='' />
                        
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default TerapiaAparatologia