import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ItemCount from '../Contador/terapiasCount';
import { CartContext } from '../../context/context';


const TerapiaManualesItem = ({ terapias }) => {
    const { id } = useParams();
    const terapia = terapias.find((terapias) => terapias.id == id)
    const { addItem } = useContext(CartContext)
    
    const onAdd = (count) =>{
        addItem(terapia, count)
        
    }

    return (
        <div>

            <div>
                <Link to="/terapias" className="colors">
                    <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
                        Terapias
                    </Button>
                </Link>
            </div>
            <div >
            <h3>{terapia.producto}</h3>
                <img src={terapia.imagen} alt='' />
                <p>{terapia.categoría}</p>
                <p>{terapia.descripcion}</p>
                <p>$ {terapia.precio}</p>
                <p>cantidad:{terapia.cantidad} </p>
                <ItemCount onAdd={onAdd} stock={terapia.cantidad} />
            </div>
        </div>
    )
}

export default TerapiaManualesItem