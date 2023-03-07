import React from 'react'
import { useParams } from 'react-router-dom';


const TerapiaManualesItem = ({terapias}) => {
    const { id } = useParams();
    const terapia = terapias.find((terapias) => terapias.id == id)
 
 
 
     return (
         <div >
             <h3>{terapia.title}</h3>
             <img src={terapia.image} alt='' />
             <p>{terapia.category}</p>
             <p>{terapia.description}</p>
             <h2>$ {terapia.price}</h2>
         </div>
     )
}

export default TerapiaManualesItem