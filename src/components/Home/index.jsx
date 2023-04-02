import React from 'react'
import "./item.css"

const Home = ({ greeting }) => {
  return (
  <div>
   
    <div className='greeting'>
        <p>{greeting}</p>
       bienvenidos a consultorio consciencia
        
    </div>
    <div>
      <img src="../multimedia/saladeespera.jpg" />
    </div>
    </div>
  )
}

export default Home;