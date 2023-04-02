import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Figura from "../Figura";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import "./index.css"
import ItemCount from "../Contador/terapiasCount";



const TherapyList = ({ terapias }) => {
    return (

        <div >
            
            <div className="contenedor-terapias">
            <Link to="rehabilitacion" className="colors">
                <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
                    Rehabilitacion
                </Button>
            </Link>   
            <Link to="terapiasManuales" className="colors">
                <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
                    Terapias Manuales
                </Button>
            </Link>
            <Link to="terapiaAparatologia" className="colors">
                <Button color="inherit" variant="text" startIcon={<MedicalInformationIcon />}>
                    Terapias Con Aparatologias
                </Button>
            </Link>
            </div>
            <div>
                {terapias.map((terapias) => (
                    <Figura key={terapias.id} terapias={terapias} />
                    
                )
                )
                }
               
            </div>
        </div>
    )
}

export default TherapyList