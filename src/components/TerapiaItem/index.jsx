import { useContext} from "react";
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/context";
import ItemCount from "../Contador/terapiasCount";

const TerapiaItem = ({ terapias }) => {
    const { id } = useParams();
    const terapia = terapias.find((terapias) => terapias.id == id)
    
    const { addItem } = useContext(CartContext);
    
    const onAdd = (count) => {
        addItem(terapia, count);
      };
    return (

        <div >
            <h2>{terapia.producto}</h2>
            <img src={terapia.imagen} alt='' />
            <p>{terapia.categoría}</p>
            <p>{terapia.descripcion}</p>
            <p>$ {terapia.precio}</p>
            
            
            
            <ItemCount onAdd={onAdd} stock={terapia.cantidad} />
            

            
        </div>

    )
}

export default TerapiaItem