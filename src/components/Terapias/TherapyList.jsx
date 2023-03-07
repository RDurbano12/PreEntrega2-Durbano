import Figura from "../Figura";


const TherapyList = ({ terapias }) => {
    return (
        <div>
            {terapias.map((terapias) =>(   
                <Figura key={terapias.id} terapias={terapias} />           
           ))}
        </div>
    )
}

export default TherapyList