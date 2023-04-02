import { Link } from "react-router-dom";

const Rehabilitacion = ({ terapias }) => {

    const rehabilitacion = terapias.filter((terapia) => terapia.categoría === "rehabilitacion");
    
    return (
        <div >
            {rehabilitacion.map((terapia) => (
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
export default Rehabilitacion;